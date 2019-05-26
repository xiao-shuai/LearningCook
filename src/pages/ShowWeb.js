import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Image
    ,ScrollView,StyleSheet,
    ActivityIndicator,
    RefreshControl,
    ImageBackground,
    TextInput,
    AsyncStorage,
    ProgressViewIOS
} from 'react-native'
import { WebView } from "react-native-webview";
import { SafeAreaView ,NavigationActions,StackActions} from 'react-navigation';
class ShowWeb extends Component{
  
    constructor(props){
        super(props)
        this.state={
            aaaprogress:0,
        }
    }

    render(){
        // const aaa=this.props.
        const aaa=this.props.navigation.getParam('info')
        return(
        <SafeAreaView style={{flex:1}}>
  {
                     this.state.aaaprogress!==1&&
                 <ProgressViewIOS 
                  progress={this.state.aaaprogress}
                  progressTintColor={'red'}
                 />
                 }
                <WebView source={{uri:aaa}} 
                  //设置进度 progress值为0～1
                  onLoadProgress={({nativeEvent}) => this.setState(
                    {aaaprogress: nativeEvent.progress}
                )} 
                />
        </SafeAreaView>
        )
    }

}
export default ShowWeb