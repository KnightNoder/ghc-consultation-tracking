[1mdiff --git a/src/App.jsx b/src/App.jsx[m
[1mindex cbb6266..bb7d171 100644[m
[1m--- a/src/App.jsx[m
[1m+++ b/src/App.jsx[m
[36m@@ -1243,7 +1243,7 @@[m [mexport default function App() {[m
         proceed_link: "?page=11&type=skin",[m
         back_link: "?page=9&type=skin",[m
         conditionMet: true,[m
[31m-        overlay_screen_text: "There is nothing like mom's!",[m
[32m+[m[32m        overlay_screen_text: "There is nothing like mom's meals!",[m
         delay_time: 1000,[m
         progress_bar: true,[m
         progress_bar_text: "My Skin",[m
[1mdiff --git a/src/common/engine.js b/src/common/engine.js[m
[1mindex e43148f..f8fe122 100644[m
[1m--- a/src/common/engine.js[m
[1m+++ b/src/common/engine.js[m
[36m@@ -3064,7 +3064,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "None",[m
       },[m
[36m@@ -3087,7 +3087,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "None",[m
       },[m
[36m@@ -3110,7 +3110,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "None",[m
       },[m
[36m@@ -3133,7 +3133,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "None",[m
       },[m
[36m@@ -3156,7 +3156,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "None",[m
       },[m
[36m@@ -3179,7 +3179,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "None",[m
       },[m
[36m@@ -3202,7 +3202,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "None",[m
       },[m
[36m@@ -3227,7 +3227,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Vitamin C",[m
       },[m
[36m@@ -3250,7 +3250,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Vitamin C",[m
       },[m
[36m@@ -3273,7 +3273,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Vitamin C",[m
       },[m
[36m@@ -3296,7 +3296,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Vitamin C",[m
       },[m
[36m@@ -3319,7 +3319,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Vitamin C",[m
       },[m
[36m@@ -3342,7 +3342,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Vitamin C",[m
       },[m
[36m@@ -3365,7 +3365,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Vitamin C",[m
       },[m
[36m@@ -3390,7 +3390,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Salicylic Acid",[m
       },[m
[36m@@ -3413,7 +3413,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Salicylic Acid",[m
       },[m
[36m@@ -3436,7 +3436,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Salicylic Acid",[m
       },[m
[36m@@ -3459,7 +3459,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Salicylic Acid",[m
       },[m
[36m@@ -3482,7 +3482,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Salicylic Acid",[m
       },[m
[36m@@ -3505,7 +3505,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Salicylic Acid",[m
       },[m
[36m@@ -3528,7 +3528,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Salicylic Acid",[m
       },[m
[36m@@ -3553,7 +3553,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Retinol",[m
       },[m
[36m@@ -3576,7 +3576,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Retinol",[m
       },[m
[36m@@ -3599,7 +3599,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Retinol",[m
       },[m
[36m@@ -3622,7 +3622,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Retinol",[m
       },[m
[36m@@ -3645,7 +3645,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Retinol",[m
       },[m
[36m@@ -3668,7 +3668,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Retinol",[m
       },[m
[36m@@ -3691,7 +3691,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Retinol",[m
       },[m
[36m@@ -3716,7 +3716,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Kojic Acid",[m
       },[m
[36m@@ -3739,7 +3739,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Kojic Acid",[m
       },[m
[36m@@ -3762,7 +3762,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Kojic Acid",[m
       },[m
[36m@@ -3785,7 +3785,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Kojic Acid",[m
       },[m
[36m@@ -3808,7 +3808,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Kojic Acid",[m
       },[m
[36m@@ -3831,7 +3831,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Kojic Acid",[m
       },[m
[36m@@ -3854,7 +3854,7 @@[m [mskin_engine_long.addRule({[m
   conditions: {[m
     all: [[m
       {[m
[31m-        fact: "Are you allergic to any of the ingredients below?",[m
[32m+[m[32m        fact: "Are you allergic to any of these ingredients?",[m
         operator: "equal",[m
         value: "Kojic Acid",[m
       },[m
[1mdiff --git a/src/common/utils.js b/src/common/utils.js[m
[1mindex b728d46..3df639d 100644[m
[1m--- a/src/common/utils.js[m
[1m+++ b/src/common/utils.js[m
[36m@@ -154,7 +154,8 @@[m [mconst getSendMailData = (assessment_type, stateObj, productLink = "", productNam[m
     ) {[m
     } else {[m
       if (key == "Do you have any pre-existing problems?" || key == "What best describes your current body condition?" [m
[31m-      || key == "Do you have any past allergic reactions to any of the below components?"){[m
[32m+[m[32m      || key == "Do you have any past allergic reactions to any of the below components?"  ||[m
[32m+[m[32m      key == "Have you ever had allergic reactions to any of the components below?"){[m
         let problems = Object.keys([m
           stateObj[key][m
         );[m
