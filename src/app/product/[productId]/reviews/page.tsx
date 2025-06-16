export default async function ProductReviews({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <h1>
      Review {reviewId} Product {productId}
    </h1>
  );
}
