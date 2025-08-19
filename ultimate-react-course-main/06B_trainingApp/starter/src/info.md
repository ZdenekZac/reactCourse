Krátká odpověď: kombinace obojího.

Grid na rozložení karet v seznamu (responsivní “dlaždice”).

Flexbox uvnitř každé karty pro zarovnání řádků a ovládacích prvků.

Proč takhle

Grid skvěle řeší responsivní počet sloupců (auto-fit/auto-fill, minmax).

Flex je ideální na horizontální zarovnání: název + cena, tlačítka + / -, “Add to cart”.

Mini příklad
function Catalog({ items, onAdd, onInc, onDec }) {
  return (
    <div className="catalog">
      {items.map(item => (
        <article className="card" key={item.id}>
          <div className="media">
            <img src={item.image} alt={item.title} />
          </div>

          <header className="title-row">
            <h3>{item.title}</h3>
            <span className="price">{item.price} Kč</span>
          </header>

          <div className="controls">
            <button onClick={() => onDec(item.id)} aria-label="Minus">–</button>
            <span className="qty">{item.qty ?? 0}</span>
            <button onClick={() => onInc(item.id)} aria-label="Plus">+</button>
            <button className="add" onClick={() => onAdd(item.id)}>Add to cart</button>
          </div>
        </article>
      ))}
    </div>
  );
}

/* Grid pro seznam karet */
.catalog {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  align-items: start;
}

/* Karta produktu */
.card {
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 12px;
  background: #fff;
}

/* Obrázek/ikona – držet poměr */
.media {
  aspect-ratio: 4 / 3;         /* u SVG klidně 1/1 */
  display: grid;
  place-items: center;
  background: #fafafa;
  border-radius: 8px;
}
.media img { max-width: 80%; max-height: 80%; }

/* Flex řádek s názvem a cenou */
.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
}
.title-row h3 { font-size: 1rem; margin: 0; }
.price { font-weight: 600; }

/* Ovládací prvky – flex na zarovnání */
.controls {
  display: flex;
  align-items: center;
  gap: .5rem;
  flex-wrap: wrap; /* ať se hezky zalomí na menších šířkách */
}
.controls .qty { min-width: 2ch; text-align: center; }
.controls .add {
  margin-left: auto;           /* odtlačí Add vpravo */
  padding: .5rem .75rem;
  border-radius: 8px;
}
button { padding: .4rem .6rem; border-radius: 8px; }

Tipy

Grid v katalogu, flex uvnitř karty je nejuniverzálnější a snadno rozšiřitelný vzor.

Udrž aspect-ratio boxu pro obrázek/SVG, ať se layout nehýbe.

Pro přístupnost přidej aria-label na +/- a správné alt u ikon/obrázků.

Když budeš chtít složitější vnitřní layout (např. štítky, rating), můžeš uvnitř karty přepnout i na malý grid (2×2) – ale většinou stačí flex.

Chceš i verzi se Skeleton loading a disabled stavy tlačítek při async akci „Add to cart“?