import { useSearchShow } from './useSearchShow'

export const useSearchShowMock: ReturnType<typeof useSearchShow> = {
   query: '',
   isLoading: false,
   error: '',
   hasSearched: true,
   hasInitialSearched: true,
   shows: [],
   selectedShow: null,
   onQueryChange: jest.fn(),
   resetQuery: jest.fn(),
   onSearch: jest.fn(),
   onSelectShow: jest.fn(),
   unSelectShow: jest.fn(),
   reset: jest.fn()
}
