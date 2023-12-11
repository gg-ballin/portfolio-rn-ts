import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: colors.light.primary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 5,
    fontSize: 16,
  },
  list: {
    marginTop: 15,
  },
});

export default styles;
