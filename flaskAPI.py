from flask import Flask,request,render_template
from astarAlgorithm import Graph
from nodes.AungZayYar import *
from nodes.ThiriMinGular import *
from nodes.NanDawGone import *
from sortingAlgorithm import bubbleSort

app = Flask(__name__)


@app.route('/calculate')
def api():
    args = request.args
    startPoint=args.get('quater')
    result = Algorithm(startPoint)
    return result

@app.route('/sorting')
def sortedapi():
    args = request.args
    startPoint=args.get('quater')
    result = Algorithm(startPoint)
    bubbleSort(result)
    return result

@app.route('/')
def home():
    return render_template('map.html')
# Quater များထပ်ထည့်ခဲ့ပါက ဤနေရာ ၏ elif statement များဖြင့်ထပ်မံထည့်ရမည်။ 
def Algorithm(quater):
    result_list=[]
    if quater == 'AungZayYar':

        graph1 = Graph(AungZayYarFire_to_AungZayYar)
        result_list.append(graph1.a_star_algorithm('AungZayarFire', 'AungZayYar')) 
        
        graph2 = Graph(EastOfMarket_to_AungZayYar)
        result_list.append(graph2.a_star_algorithm('EastOfMarket', 'AungZayYar'))

        graph3 = Graph(BigMarket_to_AungZayYar)
        result_list.append(graph3.a_star_algorithm('BigMarket', 'AungZayYar'))
   
        return result_list
        
    elif quater =='NanDawGone':

        graph1 = Graph(TheeGoneHighway_to_NanDawGone)
        result_list.append(graph1.a_star_algorithm('TheeGoneHighway', 'NanDawGone')) 
        
        graph2 = Graph(AungSanFire_to_NanDawGone)
        result_list.append(graph2.a_star_algorithm('AungSanFire', 'NanDawGone'))

        graph3 = Graph(EastOfMarket_to_NanDawGone)
        result_list.append(graph3.a_star_algorithm('EastOfMarket', 'NanDawGone'))
        

        return result_list
    elif quater == 'ThiriMinGular':
        
        graph1 = Graph(AungZayarFire_to_ThiriMinGular)
        result_list.append(graph1.a_star_algorithm('AungZayarFire', 'ThiriMinGular')) 
        
        graph2 = Graph(EastOfMarket_to_ThiriMinGular)
        result_list.append(graph2.a_star_algorithm('EastOfMarket', 'ThiriMinGular'))

        graph3 = Graph(BigMarket_to_ThiriMinGular)
        result_list.append(graph3.a_star_algorithm('BigMarket', 'ThiriMinGular'))

        return result_list
    else:
        return result_list

if __name__ == "__main__":
    app.run(debug=True)