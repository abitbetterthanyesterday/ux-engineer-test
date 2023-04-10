import { act, waitFor } from '@testing-library/react'

import { AppProvider } from '@/contexts/AppContext'
import { IShow } from '@/types/shared'
import { MOCK_SHOWS } from '@/tests/fixtures'
import { renderHook } from '@testing-library/react-hooks'
import { useSearchShow } from './useSearchShow'

describe('hooks/useSearchShow', () => {
   describe('onQueryChange', () => {
      it('sets loading state to true when search is called', () => {
         // Arrange
         const { result } = renderHook(() => useSearchShow(), { wrapper: AppProvider })
         // Act
         act(() => {
            result.current.onQueryChange('hello')
         })
         act(() => {
            result.current.onSearch()
         })
         // Assert
         expect(result.current.isLoading).toBe('query')
      })

      it('sets loading state to false when search is successful, and the shows to the result of the api call', async () => {
         // Arrange
         // Mock fetch
         global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
               json: () => {
                  return Promise.resolve(
                     MOCK_SHOWS.map((show) => ({ show })).reduce(
                        (acc, cur) => acc.concat(cur),
                        [] as Array<{ show: IShow }>
                     )
                  )
               }
            })
         })
         const { result } = renderHook(() => useSearchShow(), { wrapper: AppProvider })

         // Act
         await act(async () => {
            await result.current.onSearch()
         })
         // Assert
         await waitFor(() => {
            expect(result.current.isLoading).toBe(false)
         })
         console.log('here', result.current.shows)
         expect(result.current.shows).toEqual(MOCK_SHOWS)
      })

      it('sets the error state to the error message when the api call fails', async () => {
         // Arrange
         // Mock fetch
         global.fetch = jest.fn().mockImplementation(() => {
            return Promise.reject('Could not load shows.')
         })
         const { result } = renderHook(() => useSearchShow(), { wrapper: AppProvider })

         // Act
         await act(async () => {
            await result.current.onSearch()
         })
         // Assert
         await waitFor(() => {
            expect(result.current.error).toBe('Could not load shows.')
         })
      })
   })

   describe('onSelectShow', () => {
      it('sets loading state to true when search is called', async () => {
         // Arrange
         global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
               json: () => {
                  return Promise.resolve(MOCK_SHOWS[0])
               }
            })
         })
         const { result } = renderHook(() => useSearchShow(), { wrapper: AppProvider })
         // Act
         act(() => {
            result.current.onSelectShow(MOCK_SHOWS[0])
         })
         // Assert
         expect(result.current.isLoading).toBe('show')

         // With batching, we need to add this line to make sure we wait for the last update...
         await waitFor(() => expect(result.current.isLoading).toBe(false))
      })

      it('sets loading state to false when search is successful, and the shows to the result of the api call', async () => {
         // Arrange
         // Mock fetch
         global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
               json: () => {
                  return Promise.resolve(MOCK_SHOWS[0])
               }
            })
         })
         const { result } = renderHook(() => useSearchShow(), { wrapper: AppProvider })

         // Act
         act(() => {
            result.current.onSelectShow(MOCK_SHOWS[0])
         })
         // Assert
         await waitFor(() => {
            expect(result.current.isLoading).toBe(false)
         })
         expect(result.current.selectedShow).toEqual(MOCK_SHOWS[0])
      })

      it('sets the error state to the error message when the api call fails', async () => {
         // Arrange
         // Mock fetch
         global.fetch = jest.fn().mockImplementation(() => {
            return Promise.reject('Could not load shows.')
         })
         const { result } = renderHook(() => useSearchShow(), { wrapper: AppProvider })

         // Act
         act(() => {
            result.current.onSelectShow(MOCK_SHOWS[0])
         })
         // Assert
         await waitFor(() => {
            expect(result.current.isLoading).toBe(false)
         })
         expect(result.current.error).toEqual('Could not load show details.')
      })
   })
})
