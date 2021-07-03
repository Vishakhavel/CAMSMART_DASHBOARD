# CAMSMART DASHBOARD


 <img  alt="badge" src="https://user-images.githubusercontent.com/54572908/124347839-432dff80-dc04-11eb-8360-906c7a696281.png">
 
 <img  alt="badge" src="https://user-images.githubusercontent.com/54572908/124347801-0f52da00-dc04-11eb-92a9-df74ea0bb229.png">

 <img  alt="badge" src="https://user-images.githubusercontent.com/54572908/124347736-af5c3380-dc03-11eb-8b84-ce49dd2d0eee.jpeg">
 
 









This project was created using React.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\ 
I have changed the port to 4200 instead of the default 3000, so make sure to make the changes in the URL in the web browser:
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

To pull and the run the dashboard as a container, feel free to pull the image from my docker hub acc. 
The repo is public.

1. docker pull vishakhavel/tarp:react_finalv1
2. docker run -d -p 4200:80 vishakhavel/tarp:react_finalv1

### `IMPORTANT`
RUN THE MYSQL CONTAINER, THEN THE SPRING SERVER, ONLY THEN THE REACT CONTAINER, FAILING TO FOLLOW THIS ORDER WILL RESULT IN AN ERROR AS THE REACT SERVER WON'T RENDER THE DATA FROM ANYWHERE.








