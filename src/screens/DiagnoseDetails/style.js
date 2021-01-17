import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
  },
  wrapper: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    backgroundColor: '#F5F5F5',
  },
  scrollWrapper: {
    width,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20
    // backgroundColor: 'pink',
  },
  upperWrapper: {
    width: '100%',
    height: height * 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 35,
   // marginTop: 20
  },
  uName: {
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontSize: 22,
    lineHeight: 30,
  },
  logoCont: {
    width: '80%',
    height: height * 0.20,
    //marginTop: height * 0.1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  textCont: {
    width: '90%',
    height: height * 0.07,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  heading: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 24,
    marginTop: height * 0.03,
    textDecorationLine: 'underline'
    // color: '#59A3EE',
  },
  textInputStyle: {
    height: 45,
    width: "90%",
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 15,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor:'#FFFFFF',
    borderColor: '#29E093'
  },
  textInputStyle2: {
    height: height * 0.3,
    width: "90%",
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 15,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor:'#FFFFFF',
    borderColor: '#29E093'
  },
  btnDetailWrapper: {
    width: '95%',
    height: height * 0.15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnDetailWrapper1: {
    width: '95%',
    height: height * 0.10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  boxBtn3: {
    width: width * 0.45,
    height: height * 0.07,
    display: 'flex',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#29E093',
    // marginLeft:width*0.09,
    //marginTop: width * 0.01
  },
  boxBtn: {
    width: width * 0.46,
    height: height * 0.07,
    display: 'flex',
    backgroundColor: '#29E093',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // marginLeft:width*0.09,
    marginTop: width * 0.01
  },
  btnText: {
    fontWeight: 'normal',
    textShadowColor: '#000000',
    fontSize: 18,
    color: '#FFFFFF'
  },
  btnText1: {
    fontWeight: 'normal',
    textShadowColor: '#000000',
    fontSize: 18,
    color: '#29E093'
  },
  timeBtnText: {
    fontWeight: 'normal',
    textShadowColor: '#000000',
    fontSize: 48,
    color: '#000000'
  },
  medicineModel: {
    backgroundColor: '#FFFFFF',
    marginTop: height * 0.2,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: height * 0.2,
    borderRadius: 10,
    flex: 1,
    borderColor: "#29E093",
    borderWidth: 1
  },
  testModel: {
    backgroundColor: '#FFFFFF',
    marginTop: height * 0.3,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: height * 0.3,
    borderRadius: 10,
    flex: 1,
    borderColor: "#29E093",
    borderWidth: 1
  },
  modelTextInputStyle: {
    height: 45,
    width: "90%",
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 15,
    borderRadius: 10,
    marginTop: 60,
    borderColor: '#29E093',
    marginLeft: 15
  },
  medModelTextInputStyle: {
    height: 45,
    width: "90%",
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 15,
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#29E093',
    marginLeft: 15
  },
  //.........................................................................//
  appointmentSpecsWrapper: {
    width: '90%',
    display: 'flex',
    //flexDirection: 'row',
  },
  appointmentNameWrapper: {
    marginLeft: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //marginTop:5,
  },
  timeWrapper: {
    marginLeft: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 5,
  },
  middleWrapper: {
    width: '92%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.018,
  },
  confirmAppointmentWrapper: {
    flexDirection: 'row'
    //marginLeft:width*0.17,
    //marginTop: width * 0.03,
    // justifyContent:'flex-end',
    //alignItems:'flex-end',
  },
  quanText: {
    fontSize: 18,
    marginTop: 10
    //lineHeight:20,
  },
  countView: {
    flexDirection: 'row',
    marginLeft: 20,
    //marginTop: 5,
  },
  boxQuant: {
    width: width * 0.15,
    height: height * 0.06,
    display: 'flex',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#29E093',
    // marginLeft:width*0.09,
    marginTop: width * 0.01
  },
  //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  bfbottomWrapper: {
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 10,
    elevation: 1,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderColor: '#C7C7C7',
    borderWidth: 1,
    //position: 'absolute',
    // bottom: 50,
    //marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.04,
    marginLeft: width * 0.03,
    paddingLeft: 25
  },
  feedbackTextbtn: {
    fontSize: 9,
    fontWeight: 'bold',
    fontStyle: 'italic'
    // marginLeft: 18,
  },
  bookTextbtnWrapper: {
    width: '70%',
    //padding: 10,
    borderRadius: 40,
    marginLeft: 10,
    height: height * 0.04,
    display: 'flex',
    backgroundColor: '#29E093',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookTextbtn: {
    fontWeight: 'bold',
    fontSize: 9,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  upperCont: {
    width: '100%',
    height: height * 0.07,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    // backgroundColor: 'maroon',
  },
  arrowCont: {
    width: width * 0.15,
    height: height * 0.03,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.02,
    // backgroundColor: 'pink',
  },
});