import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    width: WINDOW_WIDTH,
    backgroundColor: 'cadetblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});

export default styles;
