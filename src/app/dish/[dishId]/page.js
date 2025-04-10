import { DishPage } from '../../../components/pages/dish-page/dish-page';

const DishPageWrapper = async ({ params }) => {
  const { dishId } = await params;
  return <DishPage dishId={dishId} />;
};

export default DishPageWrapper;
