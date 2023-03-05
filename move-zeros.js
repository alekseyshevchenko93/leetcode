function moveZeros(arr) {
  let start = 0, end = arr.length - 1;
  
  while (start < end) {
    if (!arr[end]) {
      end--;
      continue;
    }
    
    if (arr[start]) {
      start++;
      continue;
    }
    
    swap(arr, start, end);
    start++;
    end--;
  }
  
  return arr;
}