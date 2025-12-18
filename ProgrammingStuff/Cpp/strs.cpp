#include<iostream>
#include<string>
#include<cctype>
using namespace std;

int main() {
   string s = "A man, a plan, a canal: Panama";

   for(int i = 0; i < s.size(); ++i) {
            char c = s[i];
            if(c >= 'A' && c <= 'Z') {
                s[i] = c+32;
            }
   }
   
   int slow = 0;
   for(int fast = 0; fast < s.size(); fast++) {
      if(isalnum(s[fast])) {
         s[slow++]  = s[fast];
      }
   }
   s.resize(slow);
   // 
      cout << s;



}