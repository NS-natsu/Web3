#include <stdio.h>
#define SIZE (12)
int main(){
  for(int r = 1; r <= SIZE; r++){
    for(int c = 1; c <= SIZE; c++) printf("%d\t", r * c);
    printf("\n");
  }
  return 0;
}
