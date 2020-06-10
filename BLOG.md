 `InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp`

Array Example: 
```[8,4,23,42,16,15]```
 <br><br>
 Pass 1:
 - Original:
 | 8 | 4 | 23 | 16 | 15 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |
<br><br>
- After pass: 
 | 4 | 8 | 23 | 16 | 15 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |  
<br><br><br><br>
 Pass 2:
- Original:
 | 4 | 8 | 23 | 16 | 15 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |  
<br><br>
- After pass: 
 | 4 | 8 | 23 | 16 | 15 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |  
<br><br><br><br>
 Pass 3:
- Original:
 | 4 | 8 | 23 | 16 | 15 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |  
<br><br>
- After pass: 
 | 4 | 8 | 16 | 23 | 15 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |  
<br><br><br><br>
 Pass 4:
- Original:
 | 4 | 8 | 23 | 16 | 15 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |  
<br><br>
- After pass: 
 | 4 | 8 | 16 | 23 | 15 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |  

  <br><br><br><br>
  
  Pass 5:
- Original:
 | 4 | 8 | 16 | 23 | 15 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |  
<br><br>
- After pass: 
 | 4 | 8 | 15 | 16 | 23 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |  