export default function Card(nft) {
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src={nft.name} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{nft.title}</h5>
      <p class="card-text">{nft.description}</p>
      <a href={nft.path} class="btn btn-primary">Comprar</a>
    </div>
  </div>
}