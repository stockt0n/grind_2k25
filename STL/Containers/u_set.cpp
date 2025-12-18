/*
   unordered_set: stores key and value in as keys, or elements are stored as keys themselves. they are mutable and elements can only be insertedd and deleted. all operations take constant time on avg and linear in worst case.
*/

#include<iostream>
#include<unordered_set>

using namespace std;

int main() {
   unordered_set<int> s = {1,2,3,4};
   s.insert(5);

   for(auto& p: s) {
      cout << p << " ";
   }
   cout << endl;
   s.erase(s.find(2));
   for(auto& p: s) {
      cout << p << " ";
   }

   // and all similar methods as other containers

   int size = 5;
   int arr[size] = {1,2,2,4,5};


   // woosh we can remove similiar elements from the array and make an array of unique elements
   unordered_set<int> s2;
   for(int i = 0; i < size; i++) {
      s2.insert(arr[i]);
   }
   cout << endl;
   for(auto& p: s2) {
      cout << p << " ";
   }

   return 0;
}