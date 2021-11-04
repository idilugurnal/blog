import java.util.*;
import java.util.stream.Collectors;

public class Solution {

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {

        ListNode dummyHead = new ListNode(0);
        ListNode curr = dummyHead;
        ListNode one= l1;
        ListNode two = l2;
        int carry = 0;

        while(one!= null || two!= null){

            int first = (one != null) ? one.val : 0;
            int second = (two != null) ? two.val : 0;
            int sum = carry + first + second;

            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;

            if (one != null) one = one.next;
            if(two != null) two = two.next;

        }

        if(carry > 0){
            curr.next = new ListNode(carry);
        }

        return dummyHead.next;

    }

    public static int lengthOfLongestSubstring(String s) {

        int maxCount = 0;
        if(s.equals("")){
            return 0;
        }
        else if (s.length() == 1){
            return 1;
        }

        else{
            int left = 0;
            int right = 0;

            Map<Character, Integer> map = new HashMap<>();

            while(right < s.length()){

                if(map.containsKey(s.charAt(right))){
                    left = Math.max(left, map.get(s.charAt(right)));
                }

                maxCount = Math.max(maxCount, right - left + 1);
                map.put(s.charAt(right), right + 1);
                right += 1;
            }
        }

        return maxCount;
    }

    public static String convert(String s, int numRows) {

        Map<Integer, Vector<Character>> map = new HashMap<>();

        for(int i = 0; i < numRows; i ++){
            map.put(i,new Vector());
        }

        int counter = 0;
        boolean increment = true;
        int line = 0;

        while(counter < s.length()){
            if((line+1) / numRows == 1) increment = false;
            if(line == 0) increment = true;

            Vector<Character> v = map.get(line);
            v.add(s.charAt(counter));

            map.put(line , v);
            counter ++;

            if(increment) line ++;
            else line --;
        }

        StringBuilder result = new StringBuilder();

        for(int i =0; i< numRows; i++){
            Vector<Character> tmp = map.get(i);
            for(int j = 0; j < tmp.size(); j ++){
                result.append(tmp.get(j));
            }
        }

        return result.toString();

    }

    public static int greaterThanOne(int[]A){

        Arrays.sort(A);

        if(A[0] > 1) return 1;
        for(int i = 1; i < A.length; i++){
            if(A[i] <= 1) continue;
            if(A[i] - A[i-1] > 1){
                if(A[i-1] > 0) return A[i-1] + 1;
                else return 1;
            }
        }

        if(A[A.length-1] + 1 > 0) return A[A.length-1] + 1;
        return 1;



    }

    public static int solutionEx(int[] A) {
        // write your code in Java SE 8

        Map<Integer, Integer> map = new HashMap<>();
        int maxKey = 0;

        for(int i = 0; i < A.length; i++){
            if(map.containsKey(Math.abs(A[i]))){
                int value = map.get(Math.abs(A[i]));
                if(value == -1 * A[i]){
                    maxKey = Math.max(maxKey, Math.abs(A[i]));
                }
            }
            else{
                map.put(Math.abs(A[i]) , A[i]);
            }
        }
//
//        Set<Integer> finalResult = map.entrySet().stream().filter(entry -> Objects.equals(entry.getValue(), 0)).map(Map.Entry::getKey).collect(Collectors.toSet());
//
//        int maxKey = 0;
//        for(Integer key : finalResult){
//            if(key > maxKey) maxKey = key;
//        }

        return maxKey;
    }

    public static int solution(int[] A){

        HashSet<Integer> valueSet = new HashSet<>();
        int maxValue = 0;

        for(int i: A){
            if(valueSet.contains(i * -1)){
                maxValue = Math.max(maxValue, Math.abs(i));
            }
            else{
                valueSet.add(i);
;            }
        }

        return  maxValue;

    }

    public static int leastSameDigit(int number){

        String strNumber = Integer.toString(number);

        int size = Integer.toString(number).length();
        int i = size -1;
        String zeros = "";
        String nines = "";

        while(i >= 0){

            if(strNumber.charAt(i) != '0') break;
            zeros = zeros + "0";
            i--;
        }

        String firstNonZero = strNumber.substring(i, i+1);
        i--;

        while(i >=0){
            if(strNumber.charAt(i) != 9) break;
            nines = nines + "9";
            i--;
        }

        String remaining = "";

        if(i < 0){
            remaining = "1";
            //changes
        }
        else{
            System.out.println(strNumber.substring(0,i-1));
            System.out.println(Integer.parseInt(strNumber.substring(i-1, i)));
            remaining = strNumber.substring(0,i-1) + (Integer.parseInt(strNumber.substring(i,i+1)) + 1);
        }

        System.out.println(remaining);

        return Integer.parseInt(remaining + zeros + (Integer.parseInt(firstNonZero) -1 ) + nines);


    }

    public int sumDigits(int number){

        int sum = 0;
        while(number > 0){
            sum += number % 10;
            number /= 10;
        }

        return sum;

    }


}

class ListNode {
     int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
