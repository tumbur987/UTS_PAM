import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';  

export default function App() {
  const [result, setResult] = useState(null);

  const _handleTouchFb = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.facebook.com/tumbur.simirangkir/');
    <ScrollView>
      setResult(result);
    </ScrollView>
  };
  const _handeTouchIg = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.instagram.com/iann_simorangkir/');
    <ScrollView>
      setResult(result);
    </ScrollView>
  };
  const _handleTouchWa = async () => {
    let result = await WebBrowser.openBrowserAsync('https://wa.me/+6281227103761');
    <ScrollView>
      setResult(result);
    </ScrollView>
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#06283D', '#256D85']} style={styles.background}>
      </LinearGradient>
      <StatusBar style="light" />
      <Text style={styles.textTitle}>Tentang Saya</Text>
      <View style={{height: '18%', justifyContent: 'center', marginTop: '6%'}}>
        <Image source={require("./assets/pas-foto.jpeg")} resizeMode= "contain" style={{height: '100%', width: '100%'}}/>
      </View>
      <Text style={styles.textNama}>Tumbur Aprian Simorangkir</Text>
      <Text style={styles.text}>
        Mahasiswa Teknik Informatika di Institut Teknologi Sumatera angkatan 2020.
      </Text>
      <Text style={styles.text}>
        NIM: 120140106
      </Text>

      <Text style={styles.text}>
        Silahkan hubungi saya di:
      </Text>
      <TouchableOpacity onPress={_handleTouchWa} >
        <LinearGradient
          colors={['#256D85', '#192f6a']}
          style={styles.btnContainer}>
          <Image source={require("./assets/whatsapp.png")} resizeMode= "contain" style={styles.btnIcon}/>
          <Text style={styles.btnText}>Chat Saya di Whatsapp</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={_handleTouchFb} >
        <LinearGradient
          colors={['#256D85', '#192f6a']}
          style={styles.btnContainer}>
          <Image source={require("./assets/facebook.png")} resizeMode= "contain" style={styles.btnIcon}/>
          <Text style={styles.btnText}>Lihat Facebook Saya</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={_handeTouchIg} >
        <LinearGradient
          colors={['#256D85', '#192f6a']}
          style={styles.btnContainer}>
          <Image source={require("./assets/instagram.png")} resizeMode= "contain" style={styles.btnIcon}/>
          <Text style={styles.btnText}>Lihat Instagram Saya</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06283D',
    paddingHorizontal: '15%',
    backgroundColor: '#06283D',
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: "100%",
    width: '100%',
    zIndex: -1,
  },
  btnContainer: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 7,
    marginTop: '4%',
    display: 'flex',
    flexDirection: 'row',
  },
  btnIcon: {
    flex: 1,
    height: 20,
    width: 20
  },
  btnText: {
    flex: 4,
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#DFF6FF',
    textAlign: 'center'
  }
  ,
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#DFF6FF',
   textAlign: 'center',
  },
  textTitle: {
    backgroundColor: 'transparent',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#DFF6FF',
    marginTop: '15%',
    textAlign: 'center',
  },
  textNama: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DFF6FF',
    marginTop: '3%',
    textAlign: 'center',
  },
});
