#include <iostream>
#include <string>

int factoriza(unsigned long long n) {
    unsigned long long factor = 2;
    while (n > 1){
        if (n%factor == 0){
            std::cout << factor << " ";
            n /= factor;
        } else {
            factor++;
        }
    }
    return 0;
}

int main()
{
    unsigned long long num;
    std::cout << "Numero: ";
    std::cin >> num;
    factoriza(num);
    return 0;
}