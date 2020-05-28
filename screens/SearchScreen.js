import React from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import db from '../config';
import TransactionScreen from './BookTransactionScreen';

export default class SearchScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allTransactions:[]
        }
    }
    componentDidMount=async()=>{
        const query=await db.collection("transactions").get()
        query.docs.map((doc)=>{
            this.setState({
                allTransactions:[...this.state.allTransactions,doc.data()]
            })
        })
    }
    render(){
        return(
            <FlatList 
            data={
                this.state.allTransactions}
                renderItem={({item})=>(
            
            
               
                        <View key={index} style={{borderBottomWidth:2}}>
                              <Text>
                                {"Book id:"+transaction.bookId}
                        </Text>
                        <Text>
                                {"Student id:"+transaction.studentId}
                        </Text>
                        <Text>
                                {"Transaction Type:"+transaction.transactionType}
                        </Text>
                        <Text>
                                {"date:"+transaction.date.toDate())}
                        </Text>
                    </View>
                    
        )}
        keyExtractor={(item,index)=>index.toString()}>
            </FlatList>
           
        )
    }
}