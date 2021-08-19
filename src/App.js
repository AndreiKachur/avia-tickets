import './App.scss';

function App() {
  return (
    <div className='layout'>
      <aside className='side-bar'>

        <section className='side-bar__section'>
          <h3>Сортировать</h3>
          <div>
            <input type='radio' name='increasing' />
            <label for='increasing'>- по возрастанию цены</label>
          </div>
          <div>
            <input type='radio' name='decreasing' />
            <label for='decreasing'>- по убыванию цены</label>
          </div>
          <div>
            <input type='radio' name='time' />
            <label for='time'>- по времени в пути</label>
          </div>
        </section>

        <section className='side-bar__section'>
          <h3>Фильтровать</h3>
          <div>
            <input type='checkbox' name='with-changing' />
            <label for='with-changeing'>- 1 пересадка</label>
          </div>
          <div>
            <input type='checkbox' name='without-changing' />
            <label for='without-changing'>- без пересадок</label>
          </div>
        </section>

        <section className='side-bar__section'>
          <h3>Цена</h3>
          <div className='side-bar__section__price'>
            <label for='from'>От</label>
            <input type='number' name='from' className='side-bar__section__input-text' />
          </div>
          <div className='side-bar__section__price side-bar__section_zero-margin'>
            <label for='to'>До</label>
            <input type='number' name='to' className='side-bar__section__input-text' />
          </div>
        </section>

        <section className='side-bar__section'>
          <h3>Авиакомпании</h3>
          <div>
            <input type='checkbox' name='with-changing' />
            <label for='with-changeing'>- LOT Polish Airlines от 20000 р.</label>
          </div>
          <div>
            <input type='checkbox' name='without-changing' />
            <label for='without-changing'>- Аэрофлот рос... от 30000 р.</label>
          </div>
        </section>

      </aside>
      <main className='main'>
        Hello world
    </main>
    </div>
  );
}

export default App;
