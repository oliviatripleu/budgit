// New Payment Entry Page
// This is the new payment entry page of the app. It allows users to add new payment entries.

import { Image } from 'expo-image';
import React from 'react';
import { Button, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { pick } from '@react-native-documents/picker';
import { useRouter } from 'expo-router';

export default function NewReceipts() {
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [date, setDate] = React.useState('');
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">New Payment Entry</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {/* <Button
            title="Manual Entry"
            onPress={() => router.push('/new/manual')}
        /> */}
        {/* <Button
            title="single file import"
            onPress={async () => {
            try {
                const [pickResult] = await pick()
                // const [pickResult] = await pick({mode:'import'}) // equivalent
                // do something with the picked file
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.error('Error picking file:', err.message);
                } else {
                    console.error('Error picking file:', err);
                }
            }
            }}
        /> */}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    borderColor: '#fff',
  },
});
