
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function index() {

  const cell = ()=>{
    return(
      <TouchableOpacity style={style.cell}
            <Text style={style.cellContent}>s   </Text>
      </TouchableOpacity> )
   

  }
  const nome = "DMC";

  return (
    <View style={style.conteiner}>
        {" "}
        
        <Text style={style.title}>Jogo da Velha</Text>
       
        <Text>Vencedor</Text>
     

      <View>
        <View>
          <TouchableOpacity>
         {cell()}
          {cell()}
          {cell()}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <text>BOTAO</text>
          </TouchableOpacity>
          <TouchableOpacity>
            <text>BOTAO</text>
          </TouchableOpacity>
          <TouchableOpacity>
            <text>BOTAO</text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <text>BOTAO</text>
          </TouchableOpacity>
          <TouchableOpacity>
            <text>BOTAO</text>
          </TouchableOpacity>
          <TouchableOpacity>
            <text>BOTAO</text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  conteiner:{
    flex:1, alignItems: 'center',
     justifyContent: 'center',
      backgroundColor: '#333446'

  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20
  },
  status:{
    fontSize:19,
    marginBottom:'bold'
  },
  board:{
    marginBottom:20
  },
  row:{
    flexDirection: "row"
  },
  cell:{
    width:80,
    height:80,
    borderWidth:2,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red'

  }
  cellContent: {
    fontSize: 36,
    fontWeight: 'bold'
  }
});
