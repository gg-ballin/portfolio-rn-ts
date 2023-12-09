import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cadetblue',
    alignItems: 'center',
  },
  contentGame: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  restart: {
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  board: {
    marginTop: 20,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  squareContainer: {
    width: 100,
    height: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareTxt: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  squareTxtsml: {
    fontSize: 14,
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default styles;
