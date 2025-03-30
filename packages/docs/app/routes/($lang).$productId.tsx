export default function Product() {
  return <div>
    Visit "/en/product/123".
    Note that the url like "/american-flag-speedo" will NOT match this page.
    This is because when you have an optional dynamic param segment followed by another dynamic param, it cannot reliably be determined if a single-segment URL such as /american-flag-speedo should match /:lang /:productId
  </div>;
}
