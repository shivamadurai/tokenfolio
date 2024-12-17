# Assignment Setup

const inputArray = [2,3,4,5,2];

const responseKey = {
    1: 'a pair',
    2: 'two pairs',
    3: 'three',
    4: 'four',
    5: 'five'
}

const pokerFunction = (list) => {
    let response = '';
    const isExists = {};
    list.forEach(val => {

        if(isExists[val]) {
            isExists[val] += 1;
        } else {
            isExists[val] = 1;
        }
    })

    if(Object.values(isExists).includes(5)){
           response =  responseKey[5];
       } else if(Object.values(isExists).includes(4)) {
           response =  responseKey[4];
       }
         else if(Object.values(isExists).includes(3)) {
           response =  responseKey[3];
             if(Object.values(isExists).includes(2)){
                 response += ' + two';
             }
             
       }
         else if(Object.values(isExists).includes(2)) {
           response =  responseKey[2];
       } else {
             response =  responseKey[1];
       }

    Object.values(isExists).forEach(val => {
       
    });

    return response;
    
}
console.log(pokerFunction(inputArray));


### `npx create-react-app tokenfolio --template typescript`

To add additional modules

### `npm install axios --save` - to install axios for API calls
### `npm install antd --save` - to have AntD responsive Layout
### `npm install sass --save` - to have SCSS preprocessing
### `npm install swr --save` - to have API Caching.
### `npm install moment --save` - to have date formating support.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<img width="1752" alt="image" src="https://github.com/user-attachments/assets/c02de6a5-dcfa-49f4-ac60-6e40ee0fd8a0">

<img width="1752" alt="image" src="https://github.com/user-attachments/assets/2e1eef51-6adc-40b5-9683-8bcb014590a0">

<img width="1752" alt="image" src="https://github.com/user-attachments/assets/3987e4a4-ff48-4e9d-a644-5cf97b722e89">





