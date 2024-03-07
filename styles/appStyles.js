// styles/appStyles.tsx
import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  lightContainer: {
    backgroundColor: '#f5f5f5',
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
    zIndex: -1,
  },
  lightGradientBackground: {
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
  },
  posterContainer: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  poster: {
    width: 150,
    height: 220,
    borderRadius: 12,
  },
  movieInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  movieTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  movieDescription: {
    color: '#ffffff',
    fontSize: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  switchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
  },
  switchText: {
    color: '#ffffff',
    fontSize: 16,
    marginRight: 8,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  footer: {
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderTopWidth: 1,
    borderTopColor: '#333333',
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
  },
});
