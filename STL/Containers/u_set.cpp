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

   return 0;
}