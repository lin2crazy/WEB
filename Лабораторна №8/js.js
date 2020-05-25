const { timer } = rxjs;
const { fromFetch } = rxjs.fetch;
const { filter, map, switchMap } = rxjs.operators;

const token = prompt("Введіть ключ");
const positions = ['aapl', 'amzn', 'msft', 'tsla', 'googl','dis','pep','nflx'];
const api = 'https://cloud.iexapis.com/stable';

function quote(position, field) 
{
    return fromFetch(`${api}/stock/${position}/quote/${field}?token=${token}`).pipe(switchMap(res => res.json()));
}

function myFunction() 
{
    const table = document.getElementById('data_table');
    const time = timer(250, 100);
    const update$ = time.pipe(filter(x => x % 200 == 0));

    for (const position of positions) 
    {
        const tr = document.createElement('tr');
        const td_company_name = document.createElement('td');
        const td_position = document.createElement('td');
        const td_price = document.createElement('td');
        const td_change = document.createElement('td');

        tr.appendChild(td_company_name);
        tr.appendChild(td_position); 
        tr.appendChild(td_price);
        tr.appendChild(td_change);

        table.appendChild(tr);

        quote(position, 'companyName').subscribe(text => td_company_name.innerHTML = text);
        quote(position, 'symbol').subscribe(text => td_position.innerHTML = text);

        update$.subscribe(() => 
        {
            quote(position, 'latestPrice').subscribe(text => td_price.innerHTML = text);
            quote(position, 'change').subscribe(text => td_change.innerHTML = text);
        });
    }

    const update_element = document.getElementById('update');
    let update = 0;

    update$.subscribe(() => 
    {
        update = 0.0;
    });

    time.subscribe(x => 
    {
        update += 0.1;
        update_element.innerHTML = `Останнє оновлення: ${update.toFixed(1)}с тому`;
    });
}

myFunction();