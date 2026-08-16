// --- ZOHO PREP PLANNER DATASET ---

const problemsDataset = [
    // DAY 1: Number Manipulation + Prime + Factors + Pattern Printing
    {
        id: 1,
        day: 1,
        origNo: 1,
        name: "Diamond pattern",
        url: "https://www.geeksforgeeks.org/program-print-diamond-shape/",
        pattern: "Pattern Printing",
        difficulty: "Easy",
        time: 15,
        technique: "Divide the diamond into two main parts: the upper triangle (including the center row) and the lower triangle. For each row, calculate the number of leading spaces and stars dynamically based on the current row index, then loop to print them.",
        isDuplicate: false
    },
    {
        id: 2,
        day: 1,
        origNo: 5,
        name: "Hexadecimal to Binary conversion",
        url: "https://www.geeksforgeeks.org/program-to-convert-hexadecimal-number-to-binary/",
        pattern: "Number Manipulation",
        difficulty: "Easy",
        time: 15,
        technique: "Store the 4-bit binary equivalent of each hexadecimal digit (0-F) in a lookup array or Map. Traverse the hexadecimal string character by character, fetch its binary string from the map, and concatenate them.",
        isDuplicate: false
    },
    {
        id: 3,
        day: 1,
        origNo: 6,
        name: "Binary to Hexadecimal conversion",
        url: "https://www.geeksforgeeks.org/convert-binary-number-hexadecimal-number/",
        pattern: "Number Manipulation",
        difficulty: "Easy",
        time: 15,
        technique: "Pad the binary string with leading zeroes so its length becomes a multiple of 4. Group the string into 4-digit chunks from right to left, convert each chunk into its hexadecimal equivalent, and concatenate them.",
        isDuplicate: false
    },
    {
        id: 4,
        day: 1,
        origNo: 60,
        name: "Convert to base 7",
        url: "https://leetcode.com/problems/base-7/description/",
        pattern: "Number Manipulation",
        difficulty: "Easy",
        time: 15,
        technique: "Extract remainders by repeatedly computing `n % 7` and update `n = n / 7` in a loop. Collect the remainders, handle negative numbers with a sign flag, and reverse the result using `StringBuilder.reverse()`.",
        isDuplicate: false
    },
    {
        id: 5,
        day: 1,
        origNo: 42,
        name: "Adding a digit to all digits of a number",
        url: "",
        pattern: "Number Manipulation",
        difficulty: "Easy",
        time: 20,
        technique: "Extract each digit from right to left using `% 10` and `/ 10`. Add the target value $D$ to each digit. Since the output concatenates the sums directly (e.g., $8 + 4 = 12$, output is $12$ not a carried value), build the result using a string buffer or by tracking decimal positions.",
        isDuplicate: false
    },
    {
        id: 6,
        day: 1,
        origNo: 43,
        name: "Add Digits (Digital Root)",
        url: "https://leetcode.com/problems/add-digits/description/",
        pattern: "Number Manipulation",
        difficulty: "Easy",
        time: 15,
        technique: "Implement a double loop: the outer loop runs until the number is a single digit, and the inner loop sums individual digits. For an optimized solution, utilize the digital root math formula: `1 + (n - 1) % 9` for `n > 0`.",
        isDuplicate: false
    },
    {
        id: 7,
        day: 1,
        origNo: 47,
        name: "Check if number a is present in another number b",
        url: "",
        pattern: "Number Manipulation",
        difficulty: "Easy",
        time: 15,
        technique: "Use Java's `String.valueOf()` to convert both integers to strings, then call `bStr.contains(aStr)`. Alternatively, write a mathematical loop checking if digits match starting from the rightmost positions.",
        isDuplicate: false
    },
    {
        id: 8,
        day: 1,
        origNo: 24,
        name: "Palindrome number check without arrays/strings",
        url: "https://www.geeksforgeeks.org/problems/palindrome/0",
        pattern: "Number Manipulation",
        difficulty: "Easy",
        time: 15,
        technique: "Extract digits from right to left using `% 10` and mathematically build the reversed number: `reversed = reversed * 10 + digit`. Compare the final reversed value with the original number stored in a temporary variable.",
        isDuplicate: false
    },
    {
        id: 9,
        day: 1,
        origNo: 10,
        name: "Print first N prime numbers",
        url: "https://www.geeksforgeeks.org/program-to-print-first-n-prime-numbers/",
        pattern: "Prime",
        difficulty: "Easy",
        time: 15,
        technique: "Run a counter starting at 2. Check if the current value is prime using a helper function that checks divisibility up to `Math.sqrt(number)`. If prime, print it and increment your counter until you reach $N$.",
        isDuplicate: false
    },
    {
        id: 10,
        day: 1,
        origNo: 13,
        name: "Find prime numbers in given range",
        url: "https://www.geeksforgeeks.org/program-to-find-prime-numbers-between-given-interval/",
        pattern: "Prime",
        difficulty: "Easy",
        time: 15,
        technique: "Loop from the start bound of the range to the end bound. For each value, execute a primality check up to `Math.sqrt(i)`. Ensure that boundary edge conditions like negative bounds or values less than 2 are skipped.",
        isDuplicate: false
    },

    // DAY 2: Basic Arrays + Array traversal + Missing/duplicate/unique elements
    {
        id: 11,
        day: 2,
        origNo: 9,
        name: "Least prime to add so array element is divisible by second array element",
        url: "",
        pattern: "Prime + Array",
        difficulty: "Medium",
        time: 25,
        technique: "For each element index `i`, find the remainder `rem = a[i] % b[i]`. Calculate the distance `diff = b[i] - rem`. If `diff` is prime, that is your target. If not, incrementally add `b[i]` to `diff` until the resulting sum is prime.",
        isDuplicate: false
    },
    {
        id: 12,
        day: 2,
        origNo: 11,
        name: "Sort array based on minimum prime factor",
        url: "",
        pattern: "Prime + Array + Sort",
        difficulty: "Medium",
        time: 25,
        technique: "Write a helper method that computes the smallest prime divisor of a number. Store elements alongside their minimum prime factors, then sort the elements using a custom comparator that compares their computed factors.",
        isDuplicate: false
    },
    {
        id: 13,
        day: 2,
        origNo: 12,
        name: "Twisted Prime Number",
        url: "https://www.geeksforgeeks.org/problems/twisted-prime-number/0",
        pattern: "Prime",
        difficulty: "Easy-Med",
        time: 15,
        technique: "Check if the original number is prime. If it is, reverse its digits mathematically, and check if the reversed number is also prime.",
        isDuplicate: false
    },
    {
        id: 14,
        day: 2,
        origNo: 23,
        name: "Sort array elements based on number of factors (descending)",
        url: "https://www.geeksforgeeks.org/sort-elements-basis-number-factors/",
        pattern: "Factors + Sort",
        difficulty: "Medium",
        time: 25,
        technique: "Create a helper function to count divisors up to `Math.sqrt(n)` in $O(\sqrt{N})$ time. Wrap the primitive elements in an `Integer[]` array and sort using `Arrays.sort` and a custom comparator comparing factor counts.",
        isDuplicate: false
    },
    {
        id: 15,
        day: 2,
        origNo: 2,
        name: "Print array elements without duplication",
        url: "https://www.geeksforgeeks.org/problems/make-a-distinct-digit-array/0",
        pattern: "Array/HashSet",
        difficulty: "Easy",
        time: 15,
        technique: "Create a `LinkedHashSet` to preserve original insertion order. Iterate through the array, add all elements to the set, and print them.",
        isDuplicate: false
    },
    {
        id: 16,
        day: 2,
        origNo: 14,
        name: "Find extra element and its index in two arrays",
        url: "https://www.geeksforgeeks.org/problems/index-of-an-extra-element/1",
        pattern: "Array",
        difficulty: "Easy",
        time: 15,
        technique: "Compare both arrays index by index using a single loop. The first index `i` where `arr1[i] != arr2[i]` is the location of the extra element. If no mismatch is found, the extra element is at the last index of the longer array.",
        isDuplicate: false
    },
    {
        id: 17,
        day: 2,
        origNo: 19,
        name: "Find the Missing Number",
        url: "https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1",
        pattern: "Array/Math",
        difficulty: "Easy",
        time: 15,
        technique: "Calculate the expected sum of numbers from 1 to $N$ using the mathematical formula `N * (N + 1) / 2`. Subtract the sum of actual elements in the array to find the missing value.",
        isDuplicate: false
    },
    {
        id: 18,
        day: 2,
        origNo: 64,
        name: "Find the second maximum element",
        url: "https://www.geeksforgeeks.org/problems/find-second-largest-element/0",
        pattern: "Array",
        difficulty: "Easy",
        time: 15,
        technique: "Use a single pass loop. Track `max1` and `max2`, both initialized to `Integer.MIN_VALUE`. If current value is greater than `max1`, update `max2 = max1` and `max1 = current`. If it lies between `max1` and `max2`, update `max2 = current`.",
        isDuplicate: false
    },
    {
        id: 19,
        day: 2,
        origNo: 27,
        name: "Ease the array - double match and shift zeroes",
        url: "https://www.geeksforgeeks.org/problems/ease-the-array/0",
        pattern: "Array/Simulation",
        difficulty: "Easy",
        time: 20,
        technique: "Run a single pass loop: if `arr[i] == arr[i+1]` and both are non-zero, set `arr[i] = arr[i] * 2` and `arr[i+1] = 0`. Afterwards, perform a standard in-place shift to move all zeroes to the end of the array.",
        isDuplicate: false
    },
    {
        id: 20,
        day: 2,
        origNo: 56,
        name: "Shuffle array (Fisher–Yates)",
        url: "https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/",
        pattern: "Array",
        difficulty: "Easy",
        time: 15,
        technique: "Traverse the array from the last index down to 1. Generate a random index `j` in the range `[0, i]` using `java.util.Random` and swap the elements at index `i` and `j`.",
        isDuplicate: false
    },

    // DAY 3: Sorting + Frequency + HashMap + HashSet
    {
        id: 21,
        day: 3,
        origNo: 3,
        name: "Sort odd numbers ascending and even descending",
        url: "https://www.geeksforgeeks.org/problems/sort-in-specific-order/0",
        pattern: "Custom Sorting",
        difficulty: "Easy-Med",
        time: 20,
        technique: "Convert the primitive array to an `Integer[]` array. Sort it using a custom comparator: if both are odd, sort ascending; if both are even, sort descending; if one is odd and one is even, place the odd number first.",
        isDuplicate: false
    },
    {
        id: 22,
        day: 3,
        origNo: 45,
        name: "Lexicographical sorting of strings",
        url: "https://www.geeksforgeeks.org/sort-an-array-of-strings-in-lexicographical-order/",
        pattern: "Sorting",
        difficulty: "Easy",
        time: 15,
        technique: "Use Java's built-in `Arrays.sort(stringArray)`. Learn the underlying character-by-character ASCII comparisons that drive `compareTo()`.",
        isDuplicate: false
    },
    {
        id: 23,
        day: 3,
        origNo: 61,
        name: "Wave Array (peaks and valleys)",
        url: "https://www.geeksforgeeks.org/problems/wave-array/0",
        pattern: "Array/Sorting",
        difficulty: "Easy-Med",
        time: 15,
        technique: "Sort the array in ascending order. Traverse the sorted array and swap adjacent elements (`arr[i]` and `arr[i+1]`) for every even index `i`.",
        isDuplicate: false
    },
    {
        id: 24,
        day: 3,
        origNo: 48,
        name: "Maximum product of three numbers",
        url: "https://leetcode.com/problems/maximum-product-of-three-numbers/description/",
        pattern: "Array/Sorting",
        difficulty: "Easy-Med",
        time: 20,
        technique: "Sort the array. The maximum product of three numbers will either be the product of the three largest positive numbers (`arr[N-1] * arr[N-2] * arr[N-3]`) or the product of the two smallest negative numbers and the largest positive number (`arr[0] * arr[1] * arr[N-1]`). Take the maximum of both.",
        isDuplicate: false
    },
    {
        id: 25,
        day: 3,
        origNo: 44,
        name: "Largest number formed from array",
        url: "https://www.geeksforgeeks.org/problems/largest-number-formed-from-an-array/0",
        pattern: "Custom Sorting",
        difficulty: "Medium",
        time: 30,
        technique: "Convert all integers to strings. Sort them using a custom comparator that compares concatenated results: `(a, b) -> (b + a).compareTo(a + b)`. Concatenate the sorted results into a single string.",
        isDuplicate: false
    },
    {
        id: 26,
        day: 3,
        origNo: 70,
        name: "Maximum possible k-digit number formed from array",
        url: "https://www.geeksforgeeks.org/problems/largest-number-formed-from-an-array/0",
        pattern: "Custom Sorting",
        difficulty: "Medium",
        time: 20,
        technique: "Identify as a direct duplicate of the largest number formation pattern, but with a length limit. Follow Q44.",
        isDuplicate: true
    },
    {
        id: 27,
        day: 3,
        origNo: 34,
        name: "Top three repeated numbers",
        url: "https://www.geeksforgeeks.org/find-top-three-repeated-array/",
        pattern: "HashMap + Sort",
        difficulty: "Easy-Med",
        time: 20,
        technique: "Build a frequency map using a `HashMap`. Convert the entry set to a list, sort the list by frequency values in descending order, and retrieve the top three elements.",
        isDuplicate: false
    },
    {
        id: 28,
        day: 3,
        origNo: 7,
        name: "Sort elements by frequency of occurrence (descending)",
        url: "https://www.geeksforgeeks.org/problems/sorting-elements-of-an-array-by-frequency/0",
        pattern: "HashMap + Sort",
        difficulty: "Medium",
        time: 25,
        technique: "Count frequencies in a `HashMap`. Create a list of elements from the array. Sort the list using a custom comparator: if frequencies are different, sort by frequency descending; if frequencies are equal, sort by element value ascending.",
        isDuplicate: false
    },
    {
        id: 29,
        day: 3,
        origNo: 84,
        name: "Minimum of all greater elements for each element",
        url: "https://www.geeksforgeeks.org/problems/smallest-greater-elements-in-whole-array/0/",
        pattern: "Sorting/Search",
        difficulty: "Medium",
        time: 25,
        technique: "Clone and sort the array. For each element in the original array, use binary search to locate its first occurrence in the sorted array, then step forward to locate the next greater element value. If none exists, flag it.",
        isDuplicate: false
    },
    {
        id: 30,
        day: 3,
        origNo: 65,
        name: "Unique rows in a boolean matrix",
        url: "https://www.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1",
        pattern: "Matrix + HashSet",
        difficulty: "Medium",
        time: 20,
        technique: "Convert each row of the matrix into a unique string key or a decimal value. Insert these keys into a `LinkedHashSet` to track seen rows while preserving insertion order.",
        isDuplicate: false
    },
    {
        id: 31,
        day: 3,
        origNo: 67,
        name: "Union of two arrays",
        url: "https://www.geeksforgeeks.org/problems/union-of-two-arrays/0",
        pattern: "HashSet",
        difficulty: "Easy",
        time: 15,
        technique: "Create a `HashSet`. Add all elements from the first array, followed by all elements from the second array. The size of the final set represents the count of elements in their union.",
        isDuplicate: false
    },

    // DAY 4: Two Pointer + Searching + Array optimization + Kadane
    {
        id: 32,
        day: 4,
        origNo: 28,
        name: "Key Pair (Pair with sum as X)",
        url: "https://www.geeksforgeeks.org/problems/key-pair/0",
        pattern: "Two Pointer",
        difficulty: "Easy",
        time: 15,
        technique: "Sort the array. Initialize pointers at the beginning (`left = 0`) and end (`right = N - 1`). If `arr[left] + arr[right] == X`, a matching pair exists. If sum is smaller, increment `left`; if larger, decrement `right`.",
        isDuplicate: false
    },
    {
        id: 33,
        day: 4,
        origNo: 77,
        name: "Given sorted array, check if two numbers sum to X",
        url: "https://www.geeksforgeeks.org/problems/key-pair/0",
        pattern: "Two Pointer",
        difficulty: "Easy",
        time: 10,
        technique: "Identify as a direct duplicate of the Key Pair pattern. Apply two-pointer scan directly on the pre-sorted input.",
        isDuplicate: true
    },
    {
        id: 34,
        day: 4,
        origNo: 15,
        name: "Move Zeroes to End of Array",
        url: "https://www.geeksforgeeks.org/problems/move-all-zeroes-to-end-of-array0751/1",
        pattern: "Two Pointer",
        difficulty: "Easy",
        time: 15,
        technique: "Maintain a `writePointer` starting at 0. Loop through the array; if the current element is non-zero, swap it with the element at `writePointer`, and increment `writePointer`.",
        isDuplicate: false
    },
    {
        id: 35,
        day: 4,
        origNo: 29,
        name: "Kadane's Algorithm (Max Subarray Sum)",
        url: "https://www.geeksforgeeks.org/problems/kadanes-algorithm/0",
        pattern: "Kadane",
        difficulty: "Medium",
        time: 20,
        technique: "Track `currSum` and `maxSum`. For each element, update `currSum = Math.max(arr[i], currSum + arr[i])` and update `maxSum = Math.max(maxSum, currSum)`. This dynamically decides whether to extend the current range or start a new one.",
        isDuplicate: false
    },
    {
        id: 36,
        day: 4,
        origNo: 78,
        name: "Find maximum sum of contiguous subarray",
        url: "https://www.geeksforgeeks.org/problems/kadanes-algorithm/0",
        pattern: "Kadane",
        difficulty: "Medium",
        time: 10,
        technique: "Identify as a direct duplicate of Kadane's Algorithm.",
        isDuplicate: true
    },
    {
        id: 37,
        day: 4,
        origNo: 86,
        name: "Largest sum contiguous subarray without negative numbers",
        url: "https://www.geeksforgeeks.org/problems/maximum-sub-array5443/1",
        pattern: "Kadane Variant",
        difficulty: "Medium",
        time: 20,
        technique: "Adapt Kadane's algorithm: traverse the array, accumulating sums. If you encounter a negative number, reset the running sum to zero. Keep track of the maximum sum encountered.",
        isDuplicate: false
    },
    {
        id: 38,
        day: 4,
        origNo: 66,
        name: "Longest consecutive subsequence",
        url: "https://www.geeksforgeeks.org/problems/longest-consecutive-subsequence/0",
        pattern: "HashSet",
        difficulty: "Medium",
        time: 25,
        technique: "Insert all elements into a `HashSet`. Loop through the elements; if `num - 1` is not present in the set, it marks the start of a sequence. Count successive values (`num + 1`, `num + 2`...) to find the sequence length.",
        isDuplicate: false
    },
    {
        id: 39,
        day: 4,
        origNo: 22,
        name: "Count possible triangles in array",
        url: "https://www.geeksforgeeks.org/problems/count-possible-triangles-1587115620/1",
        pattern: "Two Pointer / Sort",
        difficulty: "Medium",
        time: 25,
        technique: "Sort the array. Fix the longest side of the triangle from the end of the array (`k`). For each fixed `k`, use two pointers (`i` at start, `j = k - 1`) to find pairs where `arr[i] + arr[j] > arr[k]`. If valid, all indices between `i` and `j` can form triangles with `j` and `k`.",
        isDuplicate: false
    },
    {
        id: 40,
        day: 4,
        origNo: 49,
        name: "Two numbers with sum closest to zero",
        url: "https://www.geeksforgeeks.org/problems/two-numbers-with-sum-closest-to-zero1737/1",
        pattern: "Two Pointer / Sort",
        difficulty: "Medium",
        time: 20,
        technique: "Sort the array. Run two pointers from the boundaries (`left` and `right`). At each step, compute `sum = arr[left] + arr[right]`. Track the sum with the minimum absolute value. Increment `left` if `sum < 0`, and decrement `right` if `sum > 0`.",
        isDuplicate: false
    },
    {
        id: 41,
        day: 4,
        origNo: 16,
        name: "Single element in a sorted array",
        url: "https://leetcode.com/problems/single-element-in-a-sorted-array/description/",
        pattern: "Binary Search",
        difficulty: "Medium",
        time: 25,
        technique: "Use binary search. The unique element will break the index pair structure: duplicate values start at even indices before the unique element, and at odd indices after it. Compare `mid` with adjacent elements to decide which half to prune.",
        isDuplicate: false
    },
    {
        id: 42,
        day: 4,
        origNo: 17,
        name: "Single Number II",
        url: "https://leetcode.com/problems/single-number-ii/description/",
        pattern: "Bit Manipulation",
        difficulty: "Medium",
        time: 25,
        technique: "Count the number of set bits at each of the 32 bit positions across all numbers in the array. Since every duplicate element appears three times, any bit position sum that is not divisible by 3 must belong to the unique element.",
        isDuplicate: false
    },

    // DAY 5: String manipulation + Character frequency + Subsequence + Palindrome
    {
        id: 43,
        day: 5,
        origNo: 89,
        name: "Reverse words in a given string",
        url: "https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string/0",
        pattern: "String",
        difficulty: "Easy",
        time: 15,
        technique: "Split the string into words using `split(\"\\\\.\")`. Iterate through the resulting array in reverse order, joining the words with '.' using a `StringBuilder`.",
        isDuplicate: false
    },
    {
        id: 44,
        day: 5,
        origNo: 80,
        name: "Print odd length word starting from middle",
        url: "https://www.geeksforgeeks.org/problems/middle-pattern/1",
        pattern: "String",
        difficulty: "Easy",
        time: 15,
        technique: "Find the middle index of the string. Concatenate the second half of the string with the first half. Print prefixes of this new string in successive steps, adding leading spaces to align the output.",
        isDuplicate: false
    },
    {
        id: 45,
        day: 5,
        origNo: 50,
        name: "Find palindrome words in sentences",
        url: "https://www.geeksforgeeks.org/java-program-count-number-palindrome-words-sentence/",
        pattern: "String / Two Pointer",
        difficulty: "Easy",
        time: 15,
        technique: "Split the sentence into words using spaces or punctuation marks. For each word, use a two-pointer palindrome check to verify if it reads the same forward and backward.",
        isDuplicate: false
    },
    {
        id: 46,
        day: 5,
        origNo: 51,
        name: "Pangram Checking",
        url: "https://leetcode.com/problems/check-if-the-sentence-is-pangram/",
        pattern: "String / HashSet",
        difficulty: "Easy",
        time: 10,
        technique: "Convert the string to lowercase. Iterate through the string, adding letters to a `HashSet`. If the final size of the set is 26, the sentence contains all letters of the alphabet.",
        isDuplicate: false
    },
    {
        id: 47,
        day: 5,
        origNo: 31,
        name: "Remove characters from s1 present in s2",
        url: "https://www.geeksforgeeks.org/problems/remove-character/0",
        pattern: "String / Hashing",
        difficulty: "Easy",
        time: 15,
        technique: "Insert all characters of `s2` into a `HashSet`. Iterate through `s1` and append character elements to a `StringBuilder` only if they are not present in the set.",
        isDuplicate: false
    },
    {
        id: 48,
        day: 5,
        origNo: 8,
        name: "Check if second string is a subsequence of the first",
        url: "https://www.geeksforgeeks.org/problems/check-for-subsequence/0",
        pattern: "Two Pointer / String",
        difficulty: "Easy",
        time: 15,
        technique: "Maintain two pointers: `i` for `s1` and `j` for `s2`. Loop through `s1`; if `s1[i] == s2[j]`, increment `j`. If `j` reaches the length of `s2`, `s2` is a subsequence.",
        isDuplicate: false
    },
    {
        id: 49,
        day: 5,
        origNo: 93,
        name: "Check whether a string is subsequence of another",
        url: "https://www.geeksforgeeks.org/given-two-strings-find-first-string-subsequence-second/",
        pattern: "Two Pointer / String",
        difficulty: "Easy",
        time: 10,
        technique: "Identify as a duplicate of the subsequence matching pattern. Apply a two-pointer scan.",
        isDuplicate: true
    },
    {
        id: 50,
        day: 5,
        origNo: 74,
        name: "Reverse only vowels in a given string",
        url: "https://www.geeksforgeeks.org/problems/reverse-vowels-in-a-given-string/0",
        pattern: "Two Pointer / String",
        difficulty: "Easy",
        time: 15,
        technique: "Convert the string to a `char[]`. Run two pointers from the boundaries (`left` and `right`). Skip characters that are not vowels, swap elements when both pointers locate vowels, and advance both pointers inward.",
        isDuplicate: false
    },
    {
        id: 51,
        day: 5,
        origNo: 25,
        name: "Reverse string keeping special characters intact",
        url: "https://www.geeksforgeeks.org/problems/special-array-reversal/0",
        pattern: "Two Pointer / String",
        difficulty: "Medium",
        time: 20,
        technique: "Convert the string to a `char[]`. Run two pointers (`left` and `right`). Skip indices that are not alphabetic characters using `Character.isLetter()`. Swap elements only when both pointers land on alphabetic characters.",
        isDuplicate: false
    },
    {
        id: 52,
        day: 5,
        origNo: 87,
        name: "Reverse string without changing punctuations and spaces",
        url: "https://www.geeksforgeeks.org/problems/special-array-reversal/0",
        pattern: "Two Pointer / String",
        difficulty: "Medium",
        time: 10,
        technique: "Identify as a duplicate of the selective alphabetical swap pattern.",
        isDuplicate: true
    },
    {
        id: 53,
        day: 5,
        origNo: 18,
        name: "Minimum moves to convert string (Transform String)",
        url: "https://leetcode.com/problems/minimum-moves-to-convert-string/description/",
        pattern: "String / Greedy",
        difficulty: "Medium",
        time: 20,
        technique: "Traverse the string from left to right. If you encounter the target character 'X', it must be converted. Convert it alongside the next two characters using a single move, then jump your loop index forward by 3.",
        isDuplicate: false
    },
    {
        id: 54,
        day: 5,
        origNo: 58,
        name: "Check strength of password string",
        url: "https://www.geeksforgeeks.org/program-check-strength-password/",
        pattern: "String / Simulation",
        difficulty: "Easy-Med",
        time: 20,
        technique: "Analyze the string in a single pass. Use boolean variables to track character rules: length $\ge 8$, lowercase, uppercase, digits, and special characters. If all conditions are met, confirm validation.",
        isDuplicate: false
    },

    // DAY 6: String advanced + Recursion + Stack + Sliding Window
    {
        id: 55,
        day: 6,
        origNo: 26,
        name: "Decode recursively encoded string (count[substring])",
        url: "https://www.geeksforgeeks.org/problems/decode-the-string2444/1",
        pattern: "Recursion / Stack",
        difficulty: "Medium",
        time: 30,
        technique: "Use two stacks: `countStack` to store numbers, and `stringStack` to store partial strings. When you encounter a digit, calculate the full number. When you see '[', push count and partial string. When you see ']', pop and repeat the substring.",
        isDuplicate: false
    },
    {
        id: 56,
        day: 6,
        origNo: 37,
        name: "Print all possible words from phone digits",
        url: "https://www.geeksforgeeks.org/problems/possible-words-from-phone-digits/0",
        pattern: "Recursion / Backtrack",
        difficulty: "Medium",
        time: 25,
        technique: "Create a lookup mapping digit indices to letter groupings. Write a recursive function that appends a letter corresponding to the current digit, recurses to process the next digit, and backtracks by removing the letter.",
        isDuplicate: false
    },
    {
        id: 57,
        day: 6,
        origNo: 32,
        name: "Find next greater element (Next Larger Element)",
        url: "https://www.geeksforgeeks.org/problems/next-larger-element/0",
        pattern: "Stack",
        difficulty: "Medium",
        time: 25,
        technique: "Traverse the array from right to left. Maintain a stack of elements in decreasing order. For each element, pop smaller elements from the stack; the top element remaining is the next greater value. Push the current element onto the stack.",
        isDuplicate: false
    },
    {
        id: 58,
        day: 6,
        origNo: 92,
        name: "Print longest sequence between same character",
        url: "https://www.geeksforgeeks.org/problems/maximum-number-of-characters-between-any-two-same-character/0",
        pattern: "String / HashMap",
        difficulty: "Easy-Med",
        time: 15,
        technique: "Use a `HashMap` to store the first occurrence index of each character. As you traverse, if the character is already present in the map, compute the distance `currentIndex - firstIndex - 1` and update the maximum distance found.",
        isDuplicate: false
    },
    {
        id: 59,
        day: 6,
        origNo: 63,
        name: "Print characters with n occurrences (consecutive is 1)",
        url: "https://www.geeksforgeeks.org/problems/remaining-string/0",
        pattern: "String / HashMap",
        difficulty: "Medium",
        time: 25,
        technique: "Compress consecutive matching characters into a single occurrence. Build a frequency map of the compressed string, then iterate and print characters that match the target frequency.",
        isDuplicate: false
    },
    {
        id: 60,
        day: 6,
        origNo: 71,
        name: "Maximum of all subarrays of size k (Sliding Window)",
        url: "https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k/0",
        pattern: "Sliding Window",
        difficulty: "Medium-Hard",
        time: 35,
        technique: "Use a double-ended queue (`Deque`) to store array indices. Maintain a decreasing sequence of values by removing indices of smaller elements from the back of the queue, and remove out-of-window indices from the front.",
        isDuplicate: false
    },
    {
        id: 61,
        day: 6,
        origNo: 52,
        name: "First occurrence of all characters of s2 in s1, print substring",
        url: "",
        pattern: "Sliding Window / Map",
        difficulty: "Medium",
        time: 25,
        technique: "Track character counts of `s2` in a target map. Run a sliding window on `s1` using two pointers. Expand the right pointer to match characters, and contract the left pointer when all characters are found, tracking the minimum window length.",
        isDuplicate: false
    },
    {
        id: 62,
        day: 6,
        origNo: 95,
        name: "Most common word (excluding banned words)",
        url: "https://leetcode.com/problems/most-common-word/",
        pattern: "String / HashMap",
        difficulty: "Easy-Med",
        time: 20,
        technique: "Normalize the string by converting to lowercase and stripping punctuation. Split the string into words. Store banned words in a set, count occurrences of non-banned words using a map, and identify the most frequent word.",
        isDuplicate: false
    },
    {
        id: 63,
        day: 6,
        origNo: 69,
        name: "Group Anagrams",
        url: "https://leetcode.com/problems/group-anagrams/description/",
        pattern: "String / HashMap",
        difficulty: "Medium",
        time: 25,
        technique: "For each word, convert it to a char array, sort the characters to form a canonical key, and convert it back to a string. Group original words under their sorted keys in a `HashMap<String, List<String>>`.",
        isDuplicate: false
    },

    // DAY 7: Matrix basics + Matrix traversal + Rotation + Prefix Sum
    {
        id: 64,
        day: 7,
        origNo: 53,
        name: "Matrix Diagonal Sum",
        url: "https://leetcode.com/problems/matrix-diagonal-sum/description/",
        pattern: "Matrix",
        difficulty: "Easy",
        time: 15,
        technique: "Sum the elements along the primary diagonal (`matrix[i][i]`) and secondary diagonal (`matrix[i][N-1-i]`). If the matrix size is odd, subtract the duplicate middle element `matrix[N/2][N/2]` once.",
        isDuplicate: false
    },
    {
        id: 65,
        day: 7,
        origNo: 54,
        name: "Matrix Addition (Sum in a Matrix)",
        url: "https://leetcode.com/problems/sum-in-a-matrix/description/",
        pattern: "Matrix",
        difficulty: "Easy",
        time: 10,
        technique: "Perform matrix coordinate summation using a nested loop structure. Add corresponding cell values `matrixA[i][j] + matrixB[i][j]` and store the sum in a result matrix.",
        isDuplicate: false
    },
    {
        id: 66,
        day: 7,
        origNo: 91,
        name: "Rotate matrix 90, 180, 270, 360 degrees",
        url: "https://www.geeksforgeeks.org/problems/rotate-by-90-degree/0",
        pattern: "Matrix",
        difficulty: "Medium",
        time: 25,
        technique: "Rotate a matrix by 90 degrees by transposing it (swap `matrix[i][j]` with `matrix[j][i]`), then reversing the elements of each row. Repeat this operation $K$ times for other rotation targets.",
        isDuplicate: false
    },
    {
        id: 67,
        day: 7,
        origNo: 21,
        name: "Sort the matrix diagonally",
        url: "https://leetcode.com/problems/sort-the-matrix-diagonally/description/",
        pattern: "Matrix / Sorting",
        difficulty: "Medium",
        time: 25,
        technique: "Observe that elements on the same diagonal share a constant value for `row - col`. Group these elements in a `HashMap<Integer, PriorityQueue<Integer>>`, sort each group, and write the sorted values back to the matrix.",
        isDuplicate: false
    },
    {
        id: 68,
        day: 7,
        origNo: 38,
        name: "Sum of elements inside rectangle coordinates",
        url: "",
        pattern: "Matrix / Prefix Sum",
        difficulty: "Medium",
        time: 30,
        technique: "Build a 2D prefix sum array where `prefix[i][j]` stores the sum of the subgrid from `(0,0)` to `(i,j)`. Calculate the sum of any rectangle `(r1, c1)` to `(r2, c2)` in $O(1)$ time using inclusion-exclusion logic.",
        isDuplicate: false
    },
    {
        id: 69,
        day: 7,
        origNo: 41,
        name: "Equilibrium point in array",
        url: "https://www.geeksforgeeks.org/problems/equilibrium-point/0",
        pattern: "Prefix Sum",
        difficulty: "Easy-Med",
        time: 15,
        technique: "Compute the total sum of the array. Traverse the array while tracking a running `leftSum`. The equilibrium point is found at index `i` if `leftSum == totalSum - leftSum - arr[i]`.",
        isDuplicate: false
    },
    {
        id: 70,
        day: 7,
        origNo: 99,
        name: "Number of cells a queen can move with obstacles",
        url: "https://www.geeksforgeeks.org/number-cells-queen-can-move-obstacles-chessborad",
        pattern: "Matrix / Simulation",
        difficulty: "Medium",
        time: 25,
        technique: "From the queen's position, trace cells in all 8 directions. Increment your step count for each empty cell, and stop searching in a direction when you reach a boundary or an obstacle.",
        isDuplicate: false
    },
    {
        id: 71,
        day: 7,
        origNo: 104,
        name: "Queen cells queen can move with obstacles on chessboard",
        url: "https://www.geeksforgeeks.org/number-cells-queen-can-move-obstacles-chessborad/",
        pattern: "Matrix / Simulation",
        difficulty: "Medium",
        time: 10,
        technique: "Identify as a direct duplicate of the Queen's path simulation pattern.",
        isDuplicate: true
    },
    {
        id: 72,
        day: 7,
        origNo: 59,
        name: "Four points: square, rectangle, or other shape",
        url: "https://www.geeksforgeeks.org/problems/is-square/0",
        pattern: "Geometry / Math",
        difficulty: "Medium",
        time: 25,
        technique: "Calculate the squared Euclidean distance between all 6 pairs of coordinates. Sort the distances: a square will have 4 equal shorter distances (sides) and 2 equal longer distances (diagonals). Check rectangle criteria similarly.",
        isDuplicate: false
    },

    // DAY 8: Simulation + Greedy + Custom Comparator + Backtracking
    {
        id: 73,
        day: 8,
        origNo: 4,
        name: "Find number of currency notes summing to amount",
        url: "https://www.geeksforgeeks.org/find-number-currency-notes-sum-upto-given-amount/",
        pattern: "Greedy",
        difficulty: "Easy",
        time: 15,
        technique: "Sort currency denominations in descending order. Traverse the sorted denominations, divide the remaining amount by the current denomination to get the note count, and update the remaining amount using the modulo operator.",
        isDuplicate: false
    },
    {
        id: 74,
        day: 8,
        origNo: 102,
        name: "Job Sequencing Problem",
        url: "https://www.geeksforgeeks.org/job-sequencing-problem-set-1-greedy-algorithm/",
        pattern: "Greedy / Sorting",
        difficulty: "Medium",
        time: 30,
        technique: "Sort jobs in descending order of profit. Find the maximum deadline value. Create a timeline array to track scheduled slots; for each job, assign it to the latest available slot before its deadline.",
        isDuplicate: false
    },
    {
        id: 75,
        day: 8,
        origNo: 72,
        name: "Search a string in a given 2D matrix",
        url: "https://www.geeksforgeeks.org/problems/find-the-string-in-grid/0",
        pattern: "Backtracking / DFS",
        difficulty: "Medium",
        time: 30,
        technique: "Iterate through each cell in the grid. If a cell matches the first letter, search in all 8 directions recursively, verifying letter matches and matching string boundaries without reusing cells.",
        isDuplicate: false
    },
    {
        id: 76,
        day: 8,
        origNo: 75,
        name: "Check if given words are present in matrix",
        url: "https://www.geeksforgeeks.org/problems/find-the-string-in-grid/0",
        pattern: "Backtracking / DFS",
        difficulty: "Medium",
        time: 10,
        technique: "Identify as a duplicate of the grid-based word search pattern.",
        isDuplicate: true
    },
    {
        id: 77,
        day: 8,
        origNo: 88,
        name: "Search dictionary words moving only right or down",
        url: "",
        pattern: "Backtracking / DFS",
        difficulty: "Medium",
        time: 30,
        technique: "Perform recursive search starting from cell `(0,0)`, traversing only right and down. Match path characters with dictionary words, and prune searches that do not match prefixes of dictionary words.",
        isDuplicate: false
    },
    {
        id: 78,
        day: 8,
        origNo: 101,
        name: "Distinct permutations of a string",
        url: "https://www.geeksforgeeks.org/distinct-permutations-string-set-2",
        pattern: "Backtracking",
        difficulty: "Medium",
        time: 25,
        technique: "Sort the characters to place duplicates adjacent to each other. Write a recursive backtracking function that builds permutations index by index, skipping duplicate characters if their previous occurrences have not been processed.",
        isDuplicate: false
    },
    {
        id: 79,
        day: 8,
        origNo: 79,
        name: "Subarray with given sum",
        url: "https://www.geeksforgeeks.org/problems/subarray-with-given-sum/0",
        pattern: "Two Pointer / Backtrack",
        difficulty: "Medium",
        time: 25,
        technique: "If the array contains only positive numbers, use a sliding window: expand the right pointer to add elements, and contract the left pointer if the sum exceeds the target. If the array contains negative numbers, use a prefix sum map.",
        isDuplicate: false
    },
    {
        id: 80,
        day: 8,
        origNo: 57,
        name: "Insert 0 after consecutive K occurrences of 1",
        url: "",
        pattern: "Simulation",
        difficulty: "Medium",
        time: 20,
        technique: "Iterate through the array while maintaining a counter of consecutive 1s. Copy elements to a list; when the counter reaches $K$, insert a `0` element and reset the counter.",
        isDuplicate: false
    },
    {
        id: 81,
        day: 8,
        origNo: 76,
        name: "Sum of two large numbers stored as digit arrays",
        url: "https://www.geeksforgeeks.org/problems/sum-of-numbers-or-number/0",
        pattern: "Simulation",
        difficulty: "Medium",
        time: 25,
        technique: "Simulate column addition from right to left. Add corresponding digits along with any carry value. Append the sum digit to a list, and reverse the final list after processing all digits.",
        isDuplicate: false
    },
    {
        id: 82,
        day: 8,
        origNo: 46,
        name: "Iterative removal of numbers containing digit",
        url: "",
        pattern: "Simulation",
        difficulty: "Medium",
        time: 25,
        technique: "Run a simulation loop: read a digit input, filter elements containing that digit, and repeat until the array is empty.",
        isDuplicate: false
    },
    {
        id: 83,
        day: 8,
        origNo: 55,
        name: "Cricket score tracking from ball-by-ball timeline",
        url: "",
        pattern: "Simulation",
        difficulty: "Medium",
        time: 30,
        technique: "Iterate through the timeline tokens. Branch logic based on characters: update runs and balls faced, assign extra runs to the team score, and switch active strikers when runs are odd or an over ends.",
        isDuplicate: false
    },

    // DAY 9: Dynamic Programming + BFS/DFS + Advanced problems
    {
        id: 84,
        day: 9,
        origNo: 68,
        name: "Climbing Stairs",
        url: "https://leetcode.com/problems/climbing-stairs/description/",
        pattern: "DP",
        difficulty: "Easy",
        time: 15,
        technique: "Write the transition recurrence relation: `dp[i] = dp[i-1] + dp[i-2]`. Solve iteratively using two variables to keep track of previous steps in $O(1)$ space.",
        isDuplicate: false
    },
    {
        id: 85,
        day: 9,
        origNo: 36,
        name: "Total decoding messages",
        url: "https://www.geeksforgeeks.org/problems/total-decoding-messages/0",
        pattern: "DP",
        difficulty: "Medium",
        time: 30,
        technique: "Define `dp[i]` as the number of ways to decode prefix `s[0..i]`. Transition: `dp[i] = dp[i-1]` (if `s[i]` is a valid single digit) `+ dp[i-2]` (if `s[i-1..i]` forms a value between 10 and 26).",
        isDuplicate: false
    },
    {
        id: 86,
        day: 9,
        origNo: 40,
        name: "Total decoding messages of a digit sequence",
        url: "https://www.geeksforgeeks.org/problems/total-decoding-messages/0",
        pattern: "DP",
        difficulty: "Medium",
        time: 10,
        technique: "Identify as a direct duplicate of the decoding messages pattern.",
        isDuplicate: true
    },
    {
        id: 87,
        day: 9,
        origNo: 30,
        name: "Word Break",
        url: "https://www.geeksforgeeks.org/problems/word-break/0",
        pattern: "DP",
        difficulty: "Medium-Hard",
        time: 35,
        technique: "Define `dp[i]` as a boolean value indicating if prefix `s[0..i]` can be segmented. Transition: `dp[i] = true` if there exists an index `j < i` such that `dp[j] == true` and substring `s[j..i]` is in the dictionary.",
        isDuplicate: false
    },
    {
        id: 88,
        day: 9,
        origNo: 85,
        name: "Paths in binary matrix from start to end",
        url: "",
        pattern: "DP / Matrix",
        difficulty: "Medium",
        time: 25,
        technique: "Define `dp[i][j]` as the path count from the start coordinates to `(i,j)`. Transition: `dp[i][j] = dp[i-1][j] + dp[i][j-1]` if cell `(i,j)` is empty; if the cell contains an obstacle, set `dp[i][j] = 0`.",
        isDuplicate: false
    },
    {
        id: 89,
        day: 9,
        origNo: 90,
        name: "Shortest path using right and down moves only",
        url: "https://www.geeksforgeeks.org/find-minimum-numbers-moves-needed-move-one-cell-matrix-another/",
        pattern: "DP / Matrix",
        difficulty: "Medium",
        time: 20,
        technique: "Define `dp[i][j]` as the minimum steps to reach cell `(i,j)`. Transition: `dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1])` if cell `(i,j)` is empty.",
        isDuplicate: false
    },
    {
        id: 90,
        day: 9,
        origNo: 96,
        name: "Longest Increasing Subsequence",
        url: "https://leetcode.com/problems/longest-increasing-subsequence/",
        pattern: "DP",
        difficulty: "Medium-Hard",
        time: 35,
        technique: "Define `dp[i]` as the length of the LIS ending at index `i`. Iterate through the array; for each element, check all previous elements `j < i` and set `dp[i] = 1 + Math.max(dp[j])` for all `arr[j] < arr[i]`. The optimal algorithm uses Binary Search in $O(N \log N)$ time.",
        isDuplicate: false
    },
    {
        id: 91,
        day: 9,
        origNo: 98,
        name: "0/1 Knapsack Problem",
        url: "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem/0",
        pattern: "DP",
        difficulty: "Hard",
        time: 40,
        technique: "Define 2D array `dp[i][w]` as the maximum value achievable using the first `i` items with weight limit `w`. Transition: `dp[i][w] = Math.max(dp[i-1][w], val[i-1] + dp[i-1][w - wt[i-1]])` if the item fits.",
        isDuplicate: false
    },
    {
        id: 92,
        day: 9,
        origNo: 100,
        name: "Word Ladder (Shortest chain to target)",
        url: "https://www.geeksforgeeks.org/word-ladder-length-of-shortest-chain-to-reach-a-target-word",
        pattern: "BFS / Graph",
        difficulty: "Hard",
        time: 40,
        technique: "Use Breadth-First Search (BFS). Treat each word as a graph node, where edges connect words that differ by a single character. Run BFS level-by-level using a queue to find the shortest transformation path.",
        isDuplicate: false
    },
    {
        id: 93,
        day: 9,
        origNo: 82,
        name: "LRU Cache Design",
        url: "https://leetcode.com/problems/lru-cache/",
        pattern: "Design",
        difficulty: "Hard",
        time: 45,
        technique: "Combine a `HashMap` with a custom Doubly Linked List. The map enables $O(1)$ lookups, and the linked list tracks element usage, allowing nodes to be moved to the head on access and removed from the tail when capacity is exceeded.",
        isDuplicate: false
    },
    {
        id: 94,
        day: 9,
        origNo: 97,
        name: "Wildcard Pattern Matching",
        url: "https://www.geeksforgeeks.org/problems/wildcard-pattern-matching/1",
        pattern: "DP",
        difficulty: "Hard",
        time: 45,
        technique: "Define `dp[i][j]` as a boolean value indicating if prefix `pattern[0..i]` matches string `s[0..j]`. Transition: if characters match or pattern has '?', set `dp[i][j] = dp[i-1][j-1]`; if pattern has '*', set `dp[i][j] = dp[i-1][j] || dp[i][j-1]`.",
        isDuplicate: false
    },
    {
        id: 95,
        day: 9,
        origNo: 103,
        name: "String Transformation",
        url: "https://leetcode.com/problems/string-transformation/description/",
        pattern: "DP / Math",
        difficulty: "Medium-Hard",
        time: 40,
        technique: "Compare suffix and prefix matches using string algorithms. Calculate transition values using dynamic programming and modular arithmetic to find the number of ways to transform the string in $K$ steps.",
        isDuplicate: false
    },

    // DAY 10: Mixed Zoho Mock Programming Round + Revision
    {
        id: 96,
        day: 10,
        origNo: 35,
        name: "Find number of days between two given dates",
        url: "https://www.geeksforgeeks.org/problems/find-number-of-days-between-two-given-dates/0",
        pattern: "Simulation",
        difficulty: "Easy-Med",
        time: 15,
        technique: "Write a function that calculates total days from a reference date (e.g., 00/00/0000) to any given date. Account for leap years and different month lengths. The result is the absolute difference between the computed day counts.",
        isDuplicate: false
    },
    {
        id: 97,
        day: 10,
        origNo: 39,
        name: "Find total number of days between two dates",
        url: "https://www.geeksforgeeks.org/problems/find-number-of-days-between-two-given-dates/0",
        pattern: "Simulation",
        difficulty: "Easy-Med",
        time: 10,
        technique: "Identify as a direct duplicate of the date difference simulation pattern.",
        isDuplicate: true
    },
    {
        id: 98,
        day: 10,
        origNo: 33,
        name: "Find the next smallest palindrome of a given number",
        url: "https://www.geeksforgeeks.org/problems/next-greater-even-number/0",
        pattern: "Number Manipulation",
        difficulty: "Medium",
        time: 25,
        technique: "Copy the left half of the digits to the right half. If the resulting number is greater than the original, it is the next smallest palindrome. If not, increment the middle digits, resolve carry values, and copy the left half again.",
        isDuplicate: false
    },
    {
        id: 99,
        day: 10,
        origNo: 94,
        name: "Decode Ways",
        url: "https://leetcode.com/problems/decode-ways/",
        pattern: "DP",
        difficulty: "Medium-Hard",
        time: 25,
        technique: "This is a variant of the decoding messages pattern (Q36). Implement dynamic programming, ensuring that leading zeros (e.g. '0') and invalid mappings yield a decode count of 0.",
        isDuplicate: false
    },
    {
        id: 100,
        day: 10,
        origNo: 73,
        name: "Find number of rectangles filled with 1s in a matrix",
        url: "https://leetcode.com/problems/maximal-rectangle/description/",
        pattern: "DP + Stack",
        difficulty: "Hard",
        time: 35,
        technique: "For each row in the matrix, maintain an integer array that tracks the heights of consecutive 1s. Treat the heights array of each row as a histogram, and use a monotonic stack to find the maximal rectangle in $O(C)$ time.",
        isDuplicate: false
    }
];

// --- APP STATE MANAGEMENT ---

let completedProblems = JSON.parse(localStorage.getItem('zoho_prep_completed')) || [];
let currentTab = 'dashboard';
let timerInterval = null;
let timerSeconds = 0;

function saveProgress() {
    localStorage.setItem('zoho_prep_completed', JSON.stringify(completedProblems));
    updateProgressUI();
}

function updateProgressUI() {
    const totalUniqueProblems = problemsDataset.filter(p => !p.isDuplicate).length;
    const uniqueSolved = problemsDataset.filter(p => !p.isDuplicate && completedProblems.includes(p.id)).length;
    const pct = totalUniqueProblems > 0 ? Math.round((uniqueSolved / totalUniqueProblems) * 100) : 0;
    
    document.getElementById('progress-percent').innerText = `${pct}%`;
    document.getElementById('progress-fill').style.width = `${pct}%`;
    document.getElementById('solved-count').innerText = uniqueSolved;

    // Update individual day navigation badges
    for(let d=1; d<=10; d++) {
        const dayBadge = document.getElementById(`nav-day-pct-${d}`);
        if (dayBadge) {
            const dayProbs = problemsDataset.filter(p => p.day === d && !p.isDuplicate);
            const daySolved = dayProbs.filter(p => completedProblems.includes(p.id)).length;
            const dayPct = dayProbs.length > 0 ? Math.round((daySolved / dayProbs.length) * 100) : 0;
            dayBadge.innerText = `${dayPct}%`;
        }
    }
}

function toggleProblemComplete(id) {
    const idx = completedProblems.indexOf(id);
    if (idx === -1) {
        completedProblems.push(id);
    } else {
        completedProblems.splice(idx, 1);
    }
    saveProgress();
    
    // Rerender active view to update checked states
    if (currentTab === 'dashboard') {
        renderDashboard();
    } else if (currentTab === 'top20') {
        renderTop20();
    } else if (currentTab.startsWith('day-')) {
        const day = parseInt(currentTab.split('-')[1]);
        renderDay(day);
    }
}

// --- NAVIGATION & ROUTING ---

function switchTab(tabId) {
    currentTab = tabId;
    
    // Update active nav links
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    
    const randomBtn = document.getElementById('day-random-btn');
    if (tabId.startsWith('day-')) {
        const dayNum = tabId.split('-')[1];
        const dayNavItem = document.getElementById(`nav-day-${dayNum}`);
        if (dayNavItem) dayNavItem.classList.add('active');
        randomBtn.style.display = 'inline-flex';
    } else {
        const genericNavItem = document.querySelector(`.nav-item[onclick="switchTab('${tabId}')"]`);
        if (genericNavItem) genericNavItem.classList.add('active');
        randomBtn.style.display = 'none';
    }

    // Render contents
    const area = document.getElementById('content-area');
    const title = document.getElementById('page-title');
    
    if (tabId === 'dashboard') {
        title.innerText = "Dashboard Overview";
        renderDashboard();
    } else if (tabId === 'templates') {
        title.innerText = "Java Coding Templates";
        renderTemplates();
    } else if (tabId === 'top20') {
        title.innerText = "Top 20 Must-Solve Problems";
        renderTop20();
    } else if (tabId.startsWith('day-')) {
        const dayNum = parseInt(tabId.split('-')[1]);
        title.innerText = `Day ${dayNum} Plan`;
        renderDay(dayNum);
    }
}

// Populate the sidebar navigation list with days
function populateSidebarNav() {
    const list = document.getElementById('days-nav-list');
    list.innerHTML = '';
    
    const dayNames = [
        "Day 1: Numbers & Patterns",
        "Day 2: Basic Arrays",
        "Day 3: Sorting & Hashing",
        "Day 4: Pointers & Kadane",
        "Day 5: Strings & Checks",
        "Day 6: Stacks & Windows",
        "Day 7: Matrix Operations",
        "Day 8: Backtrack & Simulation",
        "Day 9: DP & BFS/DFS",
        "Day 10: Mock Zoho Round"
    ];

    for (let d = 1; d <= 10; d++) {
        const btn = document.createElement('button');
        btn.className = 'nav-item nav-item-day';
        btn.id = `nav-day-${d}`;
        btn.setAttribute('onclick', `switchTab('day-${d}')`);
        
        btn.innerHTML = `
            <span><i class="fa-solid fa-calendar-day"></i> ${dayNames[d-1]}</span>
            <span class="day-progress-pct" id="nav-day-pct-${d}">0%</span>
        `;
        list.appendChild(btn);
    }
}

// --- VIEW RENDERING FUNCTIONS ---

function renderDashboard() {
    const area = document.getElementById('content-area');
    
    // Stats calculation
    const totalUnique = problemsDataset.filter(p => !p.isDuplicate).length;
    const solvedUnique = problemsDataset.filter(p => !p.isDuplicate && completedProblems.includes(p.id)).length;
    const remainingUnique = totalUnique - solvedUnique;
    
    const top20Ids = [35, 34, 17, 32, 28, 63, 38, 57, 43, 50, 87, 85, 84, 66, 75, 81, 9, 12, 25, 60];
    const solvedTop20 = problemsDataset.filter(p => top20Ids.includes(p.origNo) && !p.isDuplicate && completedProblems.includes(p.id)).length;

    area.innerHTML = `
        <div class="dashboard-grid">
            <!-- Stats cards grid -->
            <div class="stats-card-row">
                <div class="card-stat">
                    <div class="stat-icon blue"><i class="fa-solid fa-database"></i></div>
                    <div class="stat-info">
                        <h4>Total Unique Problems</h4>
                        <div class="num">${totalUnique}</div>
                    </div>
                </div>
                <div class="card-stat">
                    <div class="stat-icon green"><i class="fa-solid fa-circle-check"></i></div>
                    <div class="stat-info">
                        <h4>Completed Unique</h4>
                        <div class="num">${solvedUnique}</div>
                    </div>
                </div>
                <div class="card-stat">
                    <div class="stat-icon amber"><i class="fa-solid fa-hourglass-half"></i></div>
                    <div class="stat-info">
                        <h4>Remaining Unique</h4>
                        <div class="num">${remainingUnique}</div>
                    </div>
                </div>
                <div class="card-stat">
                    <div class="stat-icon purple"><i class="fa-solid fa-trophy"></i></div>
                    <div class="stat-info">
                        <h4>Top 20 Solved</h4>
                        <div class="num">${solvedTop20}/20</div>
                    </div>
                </div>
            </div>

            <!-- Dashboard Welcome Info -->
            <div class="card day-header-card">
                <h3><i class="fa-solid fa-circle-info"></i> Welcome to your Zoho Preparation Hub</h3>
                <p class="lead-p">This planner structures all 104 Zoho questions by pattern groups and difficulty. Dedicate 3 to 5 hours daily to trace techniques and implement solutions in Java.</p>
                <div class="patterns-tags">
                    <span class="tag-pattern">Number Manipulation</span>
                    <span class="tag-pattern">Arrays</span>
                    <span class="tag-pattern">Two Pointer</span>
                    <span class="tag-pattern">HashMap / HashSet</span>
                    <span class="tag-pattern">Strings</span>
                    <span class="tag-pattern">Sliding Window</span>
                    <span class="tag-pattern">Matrix</span>
                    <span class="tag-pattern">Monotonic Stack</span>
                    <span class="tag-pattern">Backtracking</span>
                    <span class="tag-pattern">Dynamic Programming</span>
                </div>
            </div>

            <div class="columns-container">
                <!-- Left: Daily Progression Info -->
                <div>
                    <div class="card">
                        <h3><i class="fa-solid fa-list-check"></i> 10-Day Progression Guide</h3>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;">
                            <p style="font-size: 0.95rem; color: var(--text-secondary);">
                                <strong style="color: var(--primary);">Days 1–2</strong>: Number manipulations, prime search loops, and basic array scans.
                            </p>
                            <p style="font-size: 0.95rem; color: var(--text-secondary);">
                                <strong style="color: var(--primary);">Days 3–4</strong>: Array sorting, custom comparators, mapping frequencies, and inward pointer scans.
                            </p>
                            <p style="font-size: 0.95rem; color: var(--text-secondary);">
                                <strong style="color: var(--primary);">Days 5–6</strong>: Character manipulation, subsequence match pointers, monotonic stacks, and sliding windows.
                            </p>
                            <p style="font-size: 0.95rem; color: var(--text-secondary);">
                                <strong style="color: var(--primary);">Days 7–8</strong>: Diagonals, rotations, cumulative prefix tables, and backtracking search.
                            </p>
                            <p style="font-size: 0.95rem; color: var(--text-secondary);">
                                <strong style="color: var(--primary);">Day 9</strong>: Bottom-up DP arrays, BFS transformation searches, and custom designs.
                            </p>
                            <p style="font-size: 0.95rem; color: var(--text-secondary);">
                                <strong style="color: var(--primary);">Day 10</strong>: Time-boxed Mock coding round to review strategies under pressure.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Right: Quick Tips -->
                <div>
                    <div class="card">
                        <h3><i class="fa-solid fa-bolt"></i> Preparation Strategy</h3>
                        <ul class="order-list" style="margin-top: 1rem; font-size: 0.9rem;">
                            <li>Focus on deriving patterns rather than memorizing syntax.</li>
                            <li>Write logic sketches on paper before typing in your editor.</li>
                            <li>Run edge checks: negative numbers, empty arrays, duplicate inputs, boundary values.</li>
                            <li>Re-solve the Top 20 list at least once before your assessment.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderDay(dayNum) {
    const area = document.getElementById('content-area');
    const dayProbs = problemsDataset.filter(p => p.day === dayNum);
    
    // Custom day details mapping
    const dayDetails = {
        1: {
            title: "Number Manipulation + Prime + Factors + Pattern Printing",
            objective: ["Master integer arithmetic operations for digit extraction", "Understand primality testing up to square root boundaries", "Implement grid maps using loops"],
            patterns: [
                { name: "Digit extraction", logic: "Extract digits using `% 10` and `/ 10` inside loops. Rebuild values using arithmetic multiplications (`reversed = reversed * 10 + digit`) to avoid string creation.", mistake: "Converting integers to String, which increases memory allocation overhead." },
                { name: "Base conversions", logic: "Collect division remainders (`% base`), divide numbers iteratively (`/ base`), and reverse results using `StringBuilder.reverse()`.", mistake: "Failing to handle negative input numbers." },
                { name: "Primality checks", logic: "Run loop conditions up to `Math.sqrt(N)`. If a divisor is found, it is composite.", mistake: "Iterating to $N$ or $N/2$, which yields slow performance." }
            ],
            checklist: ["Can I extract digits of an integer from right to left using % and /?", "Can I reverse an integer mathematically without string helpers?", "Do I know why prime checking only runs to Math.sqrt(N)?"],
            challenge: 5 // Q42
        },
        2: {
            title: "Basic Arrays + Array Traversal + Missing/Duplicate/Unique Elements",
            objective: ["Track running counts and boundary markers in a single scan", "Use HashSet and LinkedHashSet for $O(1)$ duplicate lookups", "Perform in-place element swaps"],
            patterns: [
                { name: "Single-pass states", logic: "Track running target values (e.g. maximum, second maximum) using separate variables updated within a single loop.", mistake: "Re-scanning the array inside nested loops to find comparisons." },
                { name: "Array deduplication", logic: "Build a `LinkedHashSet` to automatically filter duplicate elements while preserving their original order.", mistake: "Sorting the array first, which changes original insertion order." },
                { name: "Bitwise XOR checking", logic: "XOR elements to isolate missing values or identify unique keys in matching sets.", mistake: "Matching indices using slow nested iterations." }
            ],
            checklist: ["Can I locate the second largest element in $O(N)$ time?", "Do I understand how LinkedHashSet tracks order?", "Can I swap array values in-place safely?"],
            challenge: 12 // Q11
        },
        3: {
            title: "Sorting + Frequency + HashMap + HashSet",
            objective: ["Implement custom Comparators using Lambda expressions", "Generate frequency maps using HashMap and sort collections by count", "Use Set collections to filter duplicate configurations"],
            patterns: [
                { name: "Custom Comparator", logic: "Override comparisons using lambda syntax `(a, b) -> Integer.compare(a, b)`. Ensure properties are transitive.", mistake: "Returning values that violate comparison rules, causing sorting crashes." },
                { name: "Frequency Map Sort", logic: "Compute element frequencies in a `HashMap`, convert entry pairs to a List, and sort the list using a comparator.", mistake: "Calculating frequency counts inside comparison loop scopes." }
            ],
            checklist: ["Can I write custom Lambda comparators for object arrays?", "Do I know how to sort HashMap entries by value?", "Do I understand duplicate checks on grid rows?"],
            challenge: 25 // Q44
        },
        4: {
            title: "Two Pointer + Searching + Array Optimization + Kadane",
            objective: ["Utilize boundary pointers moving inward on sorted inputs", "Implement Kadane's algorithm to calculate optimal subarray ranges", "Execute search partitions using Binary Search"],
            patterns: [
                { name: "Converging pointer check", logic: "With sorted arrays, place pointers at `0` and `N-1`. Move pointers inward depending on the target sum comparison.", mistake: "Applying two-pointer sum sweeps on unsorted arrays." },
                { name: "Kadane's Optimization", logic: "Maintain `currSum = Math.max(arr[i], currSum + arr[i])` and update global `maxSum`. This selects optimal subarray boundaries.", mistake: "Initializing maximum trackers to 0 on inputs with negative values." },
                { name: "Binary Search", logic: "Check bounds by calculating `mid = left + (right - left)/2`. Prune half of search spaces using index parity tests.", mistake: "Triggering index overflow calculation errors." }
            ],
            checklist: ["Can I write Kadane's algorithm from memory?", "Can I describe binary search checks on duplicates?", "Do I know when to sort before scanning with pointers?"],
            challenge: 35 // Q29
        },
        5: {
            title: "String Manipulation + Character Frequency + Subsequence + Palindrome",
            objective: ["Modify characters in-place using mutable buffers", "Use double pointer swaps with custom character skips", "Validate ordered subsequence match flags"],
            patterns: [
                { name: "Selective String swap", logic: "Convert strings to `char[]`. Run left and right pointers, incrementing past ignored characters, and swap target values.", mistake: "Using string concatenation in loop scopes." },
                { name: "Subsequence checking", logic: "Run a pointer through the main string and advance a pattern index on matches. Check index completion.", mistake: "Confusing subsequence matches with contiguous substring searches." }
            ],
            checklist: ["Am I using StringBuilder and char[] instead of repeated String concatenation?", "Can I check character properties using Character helper methods?", "Do I know how to check subsequences using pointer scans?"],
            challenge: 51 // Q25
        },
        6: {
            title: "String Advanced + Recursion + Stack + Sliding Window",
            objective: ["Parse nested groupings using stack trackers", "Generate permutations and paths using recursive search", "Implement sliding windows to track range values"],
            patterns: [
                { name: "Monotonic Stack", logic: "Traverse values and maintain element keys in increasing or decreasing stacks to find nearest greater elements.", mistake: "Evaluating range matches using nested loops." },
                { name: "Sliding window range", logic: "Use a `Deque` to store element indices. Push index targets and pop expired indices from the front.", mistake: "Iterating entire window ranges at each step." }
            ],
            checklist: ["Can I implement a monotonic stack from memory?", "Can I run sliding window tracking in linear time?", "Can I write recursive combinations cleanly?"],
            challenge: 60 // Q71
        },
        7: {
            title: "Matrix Basics + Matrix Traversal + Rotation + Prefix Sum",
            objective: ["Iterate along diagonals, rows, and columns of 2D grids", "Implement matrix transposition and row reversal in-place", "Precompute subgrid sums using inclusion-exclusion prefix formulas"],
            patterns: [
                { name: "Transpose & Reverse", logic: "Transpose a matrix by swapping `matrix[i][j]` with `matrix[j][i]` for `j > i`, then reverse the elements of each row to rotate by 90 degrees.", mistake: "Overwriting values due to incorrect swap coordinates." },
                { name: "Diagonal tracking", logic: "Identify that cells on the same diagonal share a constant value for `row - col` or `row + col`.", mistake: "Indexing beyond matrix row or column bounds." }
            ],
            checklist: ["Can I transpose a matrix in-place?", "Can I calculate 2D prefix sums for rectangle region queries?", "Do I know how to traverse diagonal matrix groups?"],
            challenge: 66 // Q91
        },
        8: {
            title: "Simulation + Greedy + Custom Comparator + Backtracking",
            objective: ["Write robust simulations for complex rules", "Perform interval optimizations using greedy choices", "Code search algorithms using backtracking techniques"],
            patterns: [
                { name: "Backtracking template", logic: "Write recursive calls that select candidates, call the recursion, and restore states (backtrack) on return.", mistake: "Leaving grid cells marked visited after returning from recursive branches." },
                { name: "Greedy scheduling", logic: "Sort inputs by properties (e.g., profit descending) and process elements sequentially.", mistake: "Applying greedy choices without proving correctness." }
            ],
            checklist: ["Can I write a standard backtracking skeleton?", "How do I mark visited cells in grid DFS?", "How do I manage state updates in simulation loops?"],
            challenge: 75 // Q72
        },
        9: {
            title: "Dynamic Programming + BFS/DFS + Advanced Problems",
            objective: ["Compute optimization values using bottom-up tabulations", "Solve shortest-path transformations using level-by-level BFS", "Design connected lookups and linked structures"],
            patterns: [
                { name: "Tabulation DP", logic: "Define DP array indices, evaluate base scenarios, and calculate values sequentially based on previous subproblems.", mistake: "Writing recursive calls without saving results (memoization)." },
                { name: "BFS graph search", logic: "Explore states level-by-level using a queue. Track visited nodes in a set to avoid loops.", mistake: "Using DFS when looking for shortest transformation steps." }
            ],
            checklist: ["Can I define the transition logic for DP sequences?", "Do I know why BFS is preferred for shortest path searches?", "Can I link Map and list elements for custom cache designs?"],
            challenge: 85 // Q36
        },
        10: {
            title: "Mixed Zoho Mock Programming Round + Revision",
            objective: ["Solve mixed-difficulty problems under exam constraints", "Verify execution states without using external references or hints", "Perform dry-runs and verify time and space complexities"],
            patterns: [
                { name: "Mock Test Practice", logic: "Complete the four problems in order without checking tips. Analyze problems to find their underlying patterns.", mistake: "Looking up solutions when encountering a difficult step." }
            ],
            checklist: ["Did I finish the mock test within the time limit?", "Can I list the 10 core Java pattern templates?", "Do I understand edge checks for each pattern?"],
            challenge: 99 // Q94
        }
    };

    const details = dayDetails[dayNum];
    const challengeProb = problemsDataset.find(p => p.id === details.challenge);

    // Build problems list rows
    let tableRows = '';
    dayProbs.forEach((p, idx) => {
        const isChecked = completedProblems.includes(p.id) ? 'checked' : '';
        const diffClass = p.isDuplicate ? 'duplicate' : p.difficulty.toLowerCase().replace('-', '');
        const displayName = p.isDuplicate ? `${p.name} <em>(DUPLICATE)</em>` : p.name;
        
        let problemCell = p.url 
            ? `<a href="${p.url}" target="_blank" class="prob-link">${displayName} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.75rem;"></i></a>`
            : `<span>${displayName}</span>`;

        tableRows += `
            <tr>
                <td class="checkbox-cell">
                    <div class="custom-checkbox ${isChecked}" onclick="toggleProblemComplete(${p.id})">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </td>
                <td>#${p.origNo}</td>
                <td>${problemCell}</td>
                <td>${p.pattern}</td>
                <td><span class="badge-difficulty ${diffClass}">${p.isDuplicate ? 'DUPLICATE' : p.difficulty}</span></td>
                <td>${p.time} mins</td>
                <td>
                    <button class="btn-reveal-inline" onclick="showTechniqueHint(${p.id})">Reveal Tip</button>
                </td>
            </tr>
        `;
    });

    // Build pattern recognition cards
    let patternCards = '';
    details.patterns.forEach(pat => {
        patternCards += `
            <div class="pattern-card">
                <div class="pattern-card-header">${pat.name}</div>
                <div class="pattern-card-body">
                    <p><strong>First Technique:</strong> ${pat.logic}</p>
                    <p><strong>Common Mistake:</strong> ${pat.mistake}</p>
                </div>
            </div>
        `;
    });

    // Build practice order list items
    let practiceOrderItems = '';
    dayProbs.filter(p => !p.isDuplicate).forEach((p, idx) => {
        practiceOrderItems += `<li><strong>Step ${idx+1}:</strong> Solve #${p.origNo} (${p.name}) to check ${p.pattern} logic.</li>`;
    });
    // Append duplicates at the end
    dayProbs.filter(p => p.isDuplicate).forEach((p) => {
        practiceOrderItems += `<li><span style="color:var(--text-secondary);">Skip #${p.origNo} (${p.name}) - duplicate task.</span></li>`;
    });

    // Build interactive checklist items
    let checklistItems = '';
    details.checklist.forEach((item, idx) => {
        // Track unique checklist state using key: day-check-idx
        const checkKey = `day-${dayNum}-check-${idx}`;
        const isChecked = localStorage.getItem(checkKey) === 'true' ? 'checked' : '';
        const icon = isChecked ? 'fa-square-check' : 'fa-square';
        
        checklistItems += `
            <div class="checklist-item ${isChecked}" onclick="toggleDayCheck('${checkKey}', this)">
                <i class="fa-regular ${icon} checkbox-icon" style="color:var(--primary); margin-top:0.2rem;"></i>
                <span>${item}</span>
            </div>
        `;
    });

    area.innerHTML = `
        <div class="dashboard-grid">
            <!-- Day header card -->
            <div class="card day-header-card">
                <h3><i class="fa-solid fa-calendar-days"></i> Day ${dayNum} — ${details.title}</h3>
                <p class="lead-p">Focus on implementing the pattern checks listed below. Avoid redundant coding on duplicate tasks.</p>
                <div style="font-size:0.9rem; color: var(--text-secondary);">
                    <span><strong>Day Load:</strong> ~3–5 hours</span>
                </div>
            </div>

            <!-- Double column container -->
            <div class="columns-container">
                <!-- Left: Problems Table -->
                <div style="display:flex; flex-direction:column; gap:1.5rem;">
                    <div class="card">
                        <h3><i class="fa-solid fa-list"></i> Target Problems</h3>
                        <div class="table-container">
                            <table class="problems-table">
                                <thead>
                                    <tr>
                                        <th style="width: 40px;">Solved</th>
                                        <th>Orig No.</th>
                                        <th>Problem</th>
                                        <th>Pattern</th>
                                        <th>Difficulty</th>
                                        <th>Target Time</th>
                                        <th>Hint</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${tableRows}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Pattern Recognition Details -->
                    <div class="card">
                        <h3><i class="fa-solid fa-magnifying-glass"></i> Pattern Recognition Guidelines</h3>
                        <div class="pattern-recognition-grid">
                            ${patternCards}
                        </div>
                    </div>
                </div>

                <!-- Right Sidebar Details -->
                <div style="display:flex; flex-direction:column; gap:1.5rem;">
                    <!-- Learning objectives -->
                    <div class="card">
                        <h3><i class="fa-solid fa-bullseye"></i> Learning Objectives</h3>
                        <ul class="objective-list">
                            ${details.objective.map(o => `<li>${o}</li>`).join('')}
                        </ul>
                    </div>

                    <!-- Practice order -->
                    <div class="card">
                        <h3><i class="fa-solid fa-arrow-down-short-wide"></i> Practice Sequence</h3>
                        <ul class="order-list">
                            ${practiceOrderItems}
                        </ul>
                    </div>

                    <!-- Timed Challenge -->
                    <div class="card">
                        <h3><i class="fa-solid fa-stopwatch"></i> Timed Challenge</h3>
                        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1rem;">
                            Test your pattern recall with a time-boxed challenge:
                        </p>
                        <div style="background:rgba(0,0,0,0.15); padding:1rem; border-radius:10px; border:1px solid var(--border-color); margin-bottom:1rem;">
                            <div style="font-weight:700; color:var(--accent); font-size:1.05rem;">#${challengeProb.origNo} — ${challengeProb.name}</div>
                            <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.25rem;">
                                Limit: <strong>${challengeProb.time} mins</strong> | No hints initially
                            </div>
                        </div>
                        <button class="btn btn-primary" style="width:100%;" onclick="triggerRandomChallenge(${challengeProb.id})">
                            <i class="fa-solid fa-play"></i> Start Challenge
                        </button>
                    </div>

                    <!-- End of day checklist -->
                    <div class="card">
                        <h3><i class="fa-solid fa-clipboard-list"></i> End of Day Checklist</h3>
                        <div class="interactive-checklist">
                            ${checklistItems}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function toggleDayCheck(key, element) {
    const isChecked = localStorage.getItem(key) === 'true';
    const newStatus = !isChecked;
    localStorage.setItem(key, newStatus);
    
    const icon = element.querySelector('.checkbox-icon');
    if (newStatus) {
        element.classList.add('checked');
        icon.classList.remove('fa-square');
        icon.classList.add('fa-square-check');
    } else {
        element.classList.remove('checked');
        icon.classList.remove('fa-square-check');
        icon.classList.add('fa-square');
    }
}

function renderTop20() {
    const area = document.getElementById('content-area');
    const top20Ids = [35, 34, 17, 32, 28, 63, 38, 57, 43, 50, 87, 85, 84, 66, 75, 81, 9, 12, 25, 60];
    
    // Grab elements mapping to these original numbers
    const topProbs = problemsDataset.filter(p => top20Ids.includes(p.origNo) && !p.isDuplicate);
    
    let rows = '';
    topProbs.forEach((p) => {
        const isChecked = completedProblems.includes(p.id) ? 'checked' : '';
        const diffClass = p.difficulty.toLowerCase().replace('-', '');
        
        let problemCell = p.url 
            ? `<a href="${p.url}" target="_blank" class="prob-link">[#${p.origNo}] ${p.name} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.75rem;"></i></a>`
            : `<span>[#${p.origNo}] ${p.name}</span>`;

        rows += `
            <tr>
                <td class="checkbox-cell">
                    <div class="custom-checkbox ${isChecked}" onclick="toggleProblemComplete(${p.id})">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </td>
                <td>Day ${p.day}</td>
                <td>${problemCell}</td>
                <td>${p.pattern}</td>
                <td><span class="badge-difficulty ${diffClass}">${p.difficulty}</span></td>
                <td>${p.time} mins</td>
                <td>
                    <button class="btn-reveal-inline" onclick="showTechniqueHint(${p.id})">Reveal Tip</button>
                </td>
            </tr>
        `;
    });

    area.innerHTML = `
        <div class="dashboard-grid">
            <div class="card day-header-card">
                <h3><i class="fa-solid fa-star"></i> Top 20 Must-Solve Problems</h3>
                <p class="lead-p">These selected questions represent the core patterns tested in Zoho technical rounds. Ensure you can solve them independently without checking documentation.</p>
            </div>

            <div class="card">
                <div class="table-container">
                    <table class="problems-table">
                        <thead>
                            <tr>
                                <th style="width: 40px;">Solved</th>
                                <th>Schedule</th>
                                <th>Problem Name</th>
                                <th>Primary Pattern</th>
                                <th>Difficulty</th>
                                <th>Target Time</th>
                                <th>Hint</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderTemplates() {
    const area = document.getElementById('content-area');
    
    const templates = [
        {
            name: "Frequency Map / Counting (HashMap)",
            desc: "Tracks occurrence counts of numbers or character symbols in linear time.",
            code: `// Counting numbers
Map<Integer, Integer> freqMap = new HashMap<>();
for (int num : arr) {
    freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
}

// Counting characters (bounded range)
int[] charCounts = new int[26];
for (char ch : str.toCharArray()) {
    charCounts[ch - 'a']++;
}`,
            clue: "Requires counting elements, locating duplicates, or sorting elements by frequency.",
            probs: "Q7 (Sort by Frequency), Q34 (Top 3 Repeated), Q69 (Group Anagrams)"
        },
        {
            name: "Two Pointer Scan",
            desc: "Inward converging scanning bounds to locate sum pairs in sorted ranges.",
            code: `int left = 0;
int right = arr.length - 1;
while (left < right) {
    int currentSum = arr[left] + arr[right];
    if (currentSum == target) {
        return new int[]{left, right};
    } else if (currentSum < target) {
        left++;
    } else {
        right--;
    }
}`,
            clue: "Looking for coordinate pairs matching a sum in a sorted range.",
            probs: "Q28 (Key Pair), Q15 (Move Zeroes), Q74 (Reverse Vowels)"
        },
        {
            name: "Sliding Window",
            desc: "Tracks running contiguous subsegments using expansion and contraction markers.",
            code: `int left = 0;
int maxLen = 0;
Map<Character, Integer> seen = new HashMap<>();

for (int right = 0; right < s.length(); right++) {
    char ch = s.charAt(right);
    // Expand window / track properties
    seen.put(ch, seen.getOrDefault(ch, 0) + 1);
    
    // Contract left pointer if condition is violated
    while (conditionViolated) {
        char leftChar = s.charAt(left);
        seen.put(leftChar, seen.get(leftChar) - 1);
        left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
}`,
            clue: "Requires finding optimal contiguous subarrays or substrings matching criteria.",
            probs: "Q71 (Max Subarray Size K), Q52 (Min Window Substring)"
        },
        {
            name: "Kadane's Algorithm",
            desc: "Calculates the maximum contiguous subarray sum in a single pass.",
            code: `int currSum = arr[0];
int maxSum = arr[0];

for (int i = 1; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
}`,
            clue: "Maximizing sum metrics across contiguous subsets.",
            probs: "Q29 (Max Contiguous Subarray), Q86 (Max Sum No Negatives)"
        },
        {
            name: "Prefix Sum",
            desc: "Precomputes range sums to answer interval inquiries in O(1) time.",
            code: `// Precomputation
int[] prefix = new int[arr.length];
prefix[0] = arr[0];
for (int i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i-1] + arr[i];
}

// Query sum from L to R (inclusive)
public int querySum(int[] prefix, int L, int R) {
    if (L == 0) return prefix[R];
    return prefix[R] - prefix[L-1];
}`,
            clue: "Repeated range sum operations where array elements remain static.",
            probs: "Q41 (Equilibrium Point), Q38 (Rectangle Sum)"
        },
        {
            name: "Custom Comparator Sorting",
            desc: "Defines custom sorting behaviors using lambda comparison definitions.",
            code: `// Sorting integers based on count properties
Integer[] arrObj = Arrays.stream(arr).boxed().toArray(Integer[]::new);
Arrays.sort(arrObj, (a, b) -> {
    int freqA = freqMap.get(a);
    int freqB = freqMap.get(b);
    if (freqA != freqB) {
        return Integer.compare(freqB, freqA); // Frequency descending
    }
    return Integer.compare(a, b); // Value ascending
});`,
            clue: "Sorting criteria that deviate from default ascending order.",
            probs: "Q3 (Odd/Even Sort), Q44 (Largest Number Formed)"
        },
        {
            name: "Recursion & Backtracking",
            desc: "Explores all possible candidate states in a depth-first search manner.",
            code: `public void backtrack(List<String> list, StringBuilder temp, String digits, int index) {
    if (index == digits.length()) {
        list.add(temp.toString());
        return;
    }
    String letters = mapping[digits.charAt(index) - '0'];
    for (char ch : letters.toCharArray()) {
        temp.append(ch);           // Choose
        backtrack(list, temp, digits, index + 1); // Explore
        temp.deleteCharAt(temp.length() - 1);     // Unchoose
    }
}`,
            clue: "Generating all arrangements, subsets, or solving path grid puzzles.",
            probs: "Q37 (Phone Digits), Q72 (Grid DFS Word Search), Q101 (Distinct Permutations)"
        },
        {
            name: "Monotonic Stack",
            desc: "Maintains elements in a stack in a sorted order to locate neighboring extremes in O(N).",
            code: `Stack<Long> st = new Stack<>();
long[] result = new long[N];

for (int i = N - 1; i >= 0; i--) {
    while (!st.isEmpty() && st.peek() <= arr[i]) {
        st.pop();
    }
    result[i] = st.isEmpty() ? -1 : st.peek();
    st.push(arr[i]);
}`,
            clue: "Locating the nearest greater or smaller element for every index.",
            probs: "Q32 (Next Greater Element), Q26 (Decode String)"
        },
        {
            name: "Matrix Traversal (Rotation)",
            desc: "Performs clean rotation checks using Transposition and Row Reversal.",
            code: `// Transpose matrix in-place
for (int i = 0; i < N; i++) {
    for (int j = i + 1; j < N; j++) {
        int temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
}

// Reverse each row
for (int i = 0; i < N; i++) {
    int left = 0, right = N - 1;
    while (left < right) {
        int temp = matrix[i][left];
        matrix[i][left] = matrix[i][right];
        matrix[i][right] = temp;
        left++; right--;
    }
}`,
            clue: "Rotating grid matrices or traversing diagonal elements.",
            probs: "Q91 (Rotate Matrix), Q21 (Diagonal Sort), Q99 (Queen Moves)"
        },
        {
            name: "Dynamic Programming (Tabulation)",
            desc: "Solves optimization states iteratively using cached table metrics.",
            code: `int[] dp = new int[N + 1];
dp[0] = 1; // Base scenarios
dp[1] = 1;

for (int i = 2; i <= N; i++) {
    dp[i] = dp[i-1] + dp[i-2]; // Recurrence relation
}`,
            clue: "Finding optimal path steps or counting configuration states.",
            probs: "Q68 (Climbing Stairs), Q30 (Word Break), Q98 (0/1 Knapsack)"
        }
    ];

    let templateCards = '';
    templates.forEach(t => {
        // Simple escaping for rendering in HTML safely
        const codeEscaped = t.code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
            
        templateCards += `
            <div class="card">
                <h3><i class="fa-solid fa-code-branch"></i> ${t.name}</h3>
                <p class="template-desc">${t.desc}</p>
                <div class="template-block">
                    <div class="template-header">
                        <h4>Java Code Blueprint</h4>
                        <button class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.75rem;" onclick="copyTemplateCode(this)">
                            <i class="fa-regular fa-copy"></i> Copy
                        </button>
                    </div>
                    <pre><code>${codeEscaped}</code></pre>
                </div>
                <div class="template-meta">
                    <p><strong>Recognition Clue:</strong> ${t.clue}</p>
                    <p style="margin-top:0.3rem;"><strong>Representative Problems:</strong> ${t.probs}</p>
                </div>
            </div>
        `;
    });

    area.innerHTML = `
        <div class="dashboard-grid">
            <div class="card day-header-card">
                <h3><i class="fa-solid fa-code"></i> Core Java Pattern Templates</h3>
                <p class="lead-p">These 10 templates form the foundation for solving Zoho's coding questions. Master their syntax and understand how they work.</p>
            </div>
            <div style="display:flex; flex-direction:column; gap:1.5rem;">
                ${templateCards}
            </div>
        </div>
    `;
}

function copyTemplateCode(btn) {
    const pre = btn.parentElement.nextElementSibling;
    navigator.clipboard.writeText(pre.innerText);
    btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
    setTimeout(() => {
        btn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy`;
    }, 2000);
}

// --- MODAL & CHALLENGE SYSTEM LOGIC ---

let activeModalProblemId = null;

function triggerActiveDayRandom() {
    if (!currentTab.startsWith('day-')) return;
    const dayNum = parseInt(currentTab.split('-')[1]);
    triggerRandomChallenge(null, dayNum);
}

function triggerRandomChallenge(forcedId = null, dayFilter = null) {
    let pool = [];
    if (forcedId) {
        pool = problemsDataset.filter(p => p.id === forcedId);
    } else if (dayFilter) {
        pool = problemsDataset.filter(p => p.day === dayFilter && !p.isDuplicate);
    } else {
        pool = problemsDataset.filter(p => !p.isDuplicate);
    }

    if (pool.length === 0) return;

    // Pick a random problem from the filtered pool
    const selectedProblem = pool[Math.floor(Math.random() * pool.length)];
    activeModalProblemId = selectedProblem.id;

    // Populate Modal elements
    document.getElementById('modal-pattern-tag').innerText = selectedProblem.pattern;
    document.getElementById('modal-problem-name').innerText = selectedProblem.name;
    document.getElementById('modal-orig-no').innerText = `#${selectedProblem.origNo}`;
    document.getElementById('modal-difficulty').innerText = selectedProblem.difficulty;
    
    // Set color badge for difficulty inside modal
    const diffBadge = document.getElementById('modal-difficulty');
    diffBadge.className = "meta-val badge-difficulty " + selectedProblem.difficulty.toLowerCase().replace('-', '');
    
    document.getElementById('modal-target-time').innerText = `${selectedProblem.time} mins`;
    
    // GFG Link Handling
    const gfgBtn = document.getElementById('modal-problem-url');
    if (selectedProblem.url) {
        gfgBtn.href = selectedProblem.url;
        gfgBtn.style.display = 'inline-flex';
    } else {
        gfgBtn.style.display = 'none';
    }

    document.getElementById('modal-technique-text').innerText = selectedProblem.technique;

    // Reset Accordion Hint
    document.getElementById('hint-content').style.display = 'none';
    document.getElementById('hint-chevron').className = "fa-solid fa-chevron-down";

    // Set complete button state
    const compBtn = document.getElementById('modal-complete-btn');
    if (completedProblems.includes(selectedProblem.id)) {
        compBtn.innerHTML = `<i class="fa-solid fa-xmark"></i> Mark Incomplete`;
        compBtn.className = "btn btn-secondary";
    } else {
        compBtn.innerHTML = `<i class="fa-solid fa-check"></i> Mark as Solved`;
        compBtn.className = "btn btn-primary";
    }

    // Reset Timer
    resetTimer();

    // Display Modal
    document.getElementById('challenge-modal').style.display = 'flex';
}

function showTechniqueHint(problemId) {
    // Reuses the modal view to show the hint details immediately
    triggerRandomChallenge(problemId);
    toggleHint(); // open the hint container automatically
}

function closeModal() {
    document.getElementById('challenge-modal').style.display = 'none';
    stopTimer();
}

function toggleHint() {
    const hint = document.getElementById('hint-content');
    const chev = document.getElementById('hint-chevron');
    if (hint.style.display === 'none') {
        hint.style.display = 'block';
        chev.className = "fa-solid fa-chevron-up";
    } else {
        hint.style.display = 'none';
        chev.className = "fa-solid fa-chevron-down";
    }
}

// --- TIMER FUNCTIONS ---

function toggleTimer() {
    const toggleBtn = document.getElementById('timer-toggle-btn');
    const display = document.getElementById('timer-display');
    
    if (timerInterval) {
        stopTimer();
        toggleBtn.innerHTML = `<i class="fa-solid fa-play"></i> Resume`;
        display.classList.remove('running');
    } else {
        display.classList.add('running');
        toggleBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
    document.getElementById('timer-toggle-btn').innerHTML = `<i class="fa-solid fa-play"></i> Start Timer`;
    document.getElementById('timer-display').classList.remove('running');
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById('timer-display').innerText = formatted;
}

function markModalProblemComplete() {
    if (activeModalProblemId) {
        toggleProblemComplete(activeModalProblemId);
        closeModal();
    }
}

// --- INIT APP ---

window.onload = function() {
    populateSidebarNav();
    switchTab('dashboard');
    updateProgressUI();
};
