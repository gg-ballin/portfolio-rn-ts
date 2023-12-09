import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: 'cadetblue',
  },
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
});

export default styles;
