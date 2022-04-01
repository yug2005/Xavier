# Xavier

**NeurotechUofT**

This app uses machine learning and signal processing to analyze P300 and SSVEP brain signals.

## Running the React App

Install the React dependencies : 

```base
npm install
```

To run the React App, use the following command : 

```bash
npm start
```

## Pages

There are three main components that the user can control with their brain signals : 

* Keyboard
* Multiple Choice
* Would you Rather

### Start Page

The start page greets the user and then walks them through a tutorial on how to use the app. 

After the tutorial, there is a calibration phase for the user. 

<img src="/src/images/Main Page.png" style="width: 800px;">

### Keyboard Page

This is the keyboard where the user's P300 brain signals will be analyzed to determine what key they want to press.

<img src="/src/images/Keyboard Page.png" style="width: 800px;">

### Multiple Chioce and Would You Rather

The multiple chioce section and the would you rather section both flash varying frequences for the different options. 

Then the user's SSVEP signals are analyzed to determine their decisions. 

<img src="/src/images/Multiple Chioce Page.png" style="width: 800px;">

The would you rather section is similar to the multiple choice sections. 

<img src="/src/images/Would You Rather Page.png" style="width: 800px;">
