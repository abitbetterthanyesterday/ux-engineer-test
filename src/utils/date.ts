/**
 *  Convert date YYYY-MM-DD to human readable format
 */
export function convertDateToHumanReadableFormat(dateString: string) {
   const date = new Date(dateString)
   const options = { year: 'numeric', month: 'long', day: 'numeric' } as const
   const formattedDate = new Intl.DateTimeFormat('en-AU', options).format(date)
   return formattedDate
}
