import java.lang.reflect.Array;
import java.util.Arrays;

public class SortingAlgorithm {

  //Q1
  // Time ? | Space ?
  private static int[] hybridSort(int[] array) {//Do not edit
    //Your Answer
// Time complexity: O(n^2) 
// Space complexity: O(1)
    for (int i = 0; i < array.length; i++) {
      boolean swapped = false;
      int min = array[i];
      int minIndex = i;
      for (int j = i + 1; j < array.length; j++) {
        if (array[j] < min) {
          min = array[j];
          minIndex = j;
          swapped = true;
        }
      }
      if (swapped) {
        swap(array, i, minIndex);
      }
    }
    return array;
  }

  //Q2
  // Time ? | Space ?
  private static int[] organiserSort(int[] array, int[] order) {//Do not edit
    //Your Answer
// Time complexity: O(m*n)
// Space complexity: O(1) 
    int index = 0; 
    for (int i = 0; i < order.length; i++) {
      for (int j = 0; j < array.length; j++) {
        if (array[j] == order[i]) {
          swap(array, index, j);
          index++;
        }
      }
    }
    return array;
  }

  //Q3
  //Time ? | Space ?
  private static int[] modifiedCountingSort(int[] array){//Do not edit
    //Your Answer
// Time complexity: O(n)
// Space complexity: O(n)
    int max = Arrays.stream(array).max().getAsInt();
    int min = Arrays.stream(array).min().getAsInt();
    int[] count = new int[max - min + 1];
    for (int i = 0; i < array.length; i++) {
      count[array[i] - min]++;
    }
    int array_idx = 0;
    for (int i = 0; i < count.length; i++) {
      while (count[i] != 0) {
        array[array_idx] = i + min;
        count[i]--;
        array_idx++;
      }
    }
    return array;
  }

  //Q4
  // Time ? | Space ?
  private static int[] mountainSort(int[] array) {//Do not edit
    //Your Answer
// Time complexity: O(n+k)
// Space complexity: O(n+k)
    int max = Arrays.stream(array).max().getAsInt();
    int min = Arrays.stream(array).min().getAsInt();
    int[] count = new int[max - min + 1];
    for (int i = 0; i < array.length; i++) {
      count[array[i] - min]++;
    }
    int array_idx = 0;
    return array;
  }

  private static void swap(int[] array, int i, int j) {//Do not edit
    int temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }

  public static void main(String[] args) {
    //You can edit here for your own testing
  }

}