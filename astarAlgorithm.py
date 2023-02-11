from collections import deque
from haversine import haversine
import time
 
class Graph:
    def __init__(self, adjac_lis):
        self.adjac_lis = adjac_lis
 
    def get_neighbors(self, v):
        return self.adjac_lis[v]
 
    # This is heuristic function which is having equal values for all nodes
    def h(self, n):
        H = {
            'A': 1,
            'B': 1,
            'C': 1,
            'D': 1
        }
 
        return H[n]
 
    def a_star_algorithm(self, start, stop):
        tic = time.perf_counter()
       
        # In this open_lst is a lisy of nodes which have been visited, but who's 
        # neighbours haven't all been always inspected, It starts off with the start 
  #node
        # And closed_lst is a list of nodes which have been visited
        # and who's neighbors have been always inspected
        open_lst = set([start])
        closed_lst = set([])
 
        # poo has present distances from start to all other nodes
        # the default value is +infinity
        poo = {}
        poo[start] = 0
 
        # par contains an adjac mapping of all nodes
        par = {}
        par[start] = start


 
        while len(open_lst) > 0:
            n = None
 
            # it will find a node with the lowest value of f() -
            for v in open_lst:
                
                # if n == None or poo[v] + self.h(v) < poo[n] + self.h(n):
                if n == None or poo[v] + 1 < poo[n] + 1:
                    n = v
 
            if n == None:
                print('Path does not exist!')
                return None
 
            # if the current node is the stop
            # then we start again from start
            if n == stop:
                reconst_path = []
                
 
                while par[n] != n:
                    reconst_path.append(n)
                    n = par[n]
                    
                    
 
                reconst_path.append(start)
 
                reconst_path.reverse()
 
                
                distance=0
                total_time=0
                for i,route in enumerate(reconst_path):
                    try:
                        
                        for x in self.adjac_lis[route]:
                            if reconst_path[i+1]==x[0]:
                               distance+=x[1]
                               total_time+=x[2]
                    except:
                        print('No need to add distance')
                reconst_path.append(round(distance, 2))
                
                print('Path found: {}'.format(reconst_path))
                toc = time.perf_counter()
                long_time=f"{toc - tic:0.4f} sec"
                reconst_path.append(long_time)
                reconst_path.append(total_time/60)
                return reconst_path
 
            # for all the neighbors of the current node do
            for (m, weight,s) in self.get_neighbors(n):
                
              # if the current node is not presentin both open_lst and closed_lst
                # add it to open_lst and note n as it's par
                if m not in open_lst and m not in closed_lst:
                    open_lst.add(m)
                    par[m] = n
                    poo[m] = poo[n] + weight
                    
                   
 
                # otherwise, check if it's quicker to first visit n, then m
                # and if it is, update par data and poo data
                # and if the node was in the closed_lst, move it to open_lst
                else:
                    if poo[m] > poo[n] + weight:
                        poo[m] = poo[n] + weight
                        par[m] = n

                        if m in closed_lst:
                            
                            closed_lst.remove(m)
                            open_lst.add(m)
                        
 
            # remove n from the open_lst, and add it to closed_lst
            # because all of his neighbors were inspected
            open_lst.remove(n)
            closed_lst.add(n)
            
            
 
        print('Path does not exist!')
        return None

adjac_lis = {
    'A': [('B', 1,10), ('C', 3,10), ('D', 7,10)],
    'B': [('D', 5,10)],
    'C': [('D', 2,10),('A',3,10)],
    'D': [('C', 12,10),('B', 5,10),('A', 1,10)]
} 
graph1 = Graph(adjac_lis)
graph1.a_star_algorithm('A', 'D')








