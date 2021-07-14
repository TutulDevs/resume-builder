//import React, { useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

function App() {
  //const [resumeData, setResumeData] = useState(null);
  // const submitFormHandler = (data) => setResumeData(data);
  // console.log(resumeData);

  // Create styles
  const styles = StyleSheet.create({
    page: {
      width: "100vw",
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    section: {
      width: "100vw",
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  // Create Document Component
  const MyDocument = (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );

  return MyDocument;
}

export default App;

/*

import Layout from "./components/layout/Layout";
import Form from "./components/Form.js/Form";

<Layout>
      <Form onSubmitForm={submitFormHandler} />
    </Layout>

*/
