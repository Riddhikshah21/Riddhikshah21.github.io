import sys
max_size = sys.maxsize
min_size = - sys.maxsize -1 
print('max:',max_size)
print('min:',min_size)

set_dsa=set()
set_dsa.add(1)
set_dsa.add(3)
set_dsa.add(2)
set_dsa.add({1,3})
print(type(set_dsa))
print(set_dsa)