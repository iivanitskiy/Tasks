import { CreateButton } from '../../createButton/createButton';
import Modal from '../../modal/modal';
import { ProductCreationForm } from '../../productCreationForm/productCreationForm';
import { ProductModel } from '../product.model';

interface Props {
	setModalVisible: (value: boolean) => void;
	modalVisible: boolean;
	handleModalClose: (value: boolean) => void;
	handleSubmit: (product: Partial<ProductModel>) => void;
};

export const ProductCreationContainer: React.FC<Props> = ({setModalVisible, modalVisible, handleModalClose, handleSubmit}) => {
	
	return (
		<>
			<CreateButton setModal={setModalVisible}/>
			<Modal title="Create Product" visible={modalVisible} onClose={handleModalClose}>
				<ProductCreationForm onSubmit={handleSubmit} />
			</Modal>
		</>
	)
};