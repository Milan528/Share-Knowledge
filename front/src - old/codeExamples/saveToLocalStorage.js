export const saveToLocalStorage = (state) => {
      const arrayOfKeys = Object.keys(state) //['app','home']
      const objectOfKeys=arrayOfKeys.map(s => [s,s])//[['app', 'app'], ['home'], ['home']]
      const entries = new Map(objectOfKeys); 
      const object = Object.fromEntries(entries); //{app: 'app', home: 'home'}
  
      localStorage.setItem(object.app, JSON.stringify(state.app))
      localStorage.setItem(object.home, JSON.stringify(state.home))
}

//**********Postavlja sve iz local storage-a**********
//    // export const saveToLocalStorage = (state) => {
//        // Object.entries(state).map(([key, value]) =>        
//        //   localStorage.setItem(key, JSON.stringify(value))
//        // )
//    // }
//****************************************************