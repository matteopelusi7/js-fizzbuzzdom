for ( let i = 1; i <= 100; i++ ) {
    
    const num = document.querySelector('#list');

    if ( i % 3 === 0 ) {

        const li = document.createElement('li');
        li.append (`fizz`);

        li.classList.add('box-green');
        
        list.append(li);
        
    } else if ( i % 5 === 0 ) {
    
        const li = document.createElement('li');
        li.append (`buzz`);

        li.classList.add('box-yellow');
        
        list.append(li);
        
    } else if ( i % 5 === 0 && i % 3 === 0 ) {

        const li = document.createElement('li');
        li.append (`fizzbuzz`);

        li.classList.add('box-red');
        
        list.append(li);
        
    } else {
        
        const li = document.createElement('li');
        li.append (`${i}`);
    
        list.append(li);

    }

}