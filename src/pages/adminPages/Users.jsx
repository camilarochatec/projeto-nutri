import { useState } from "react";
import { Table, Modal, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Users = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        { id: 1, name: "Rodrigo Barreto", email: "rodrigo@gmail.com", status: "Ativo" },
        { id: 2, name: "Joel Targino", email: "joel@gmail.com", status: "Ativo" },
        { id: 3, name: "Rafael Xavier", email: "rafael@gmail.com", status: "Ativo" },
        { id: 4, name: "Lucas Pamplona", email: "lucas@gmail.com", status: "Ativo" },
        { id: 5, name: "Giuliene Uztia", email: "giuliene@gmail.com", status: "Inativo" },
        { id: 6, name: "Gleidson Teixeira", email: "gleidson@gmail.com", status: "Ativo" },
    ];

    const showDeleteModal = (user) => {
        setSelectedUser(user);
        setIsModalVisible(true);
    };

    const handleDelete = () => {
        console.log("Usuário deletado:", selectedUser);
        setIsModalVisible(false);
    };

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Nome", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Status", dataIndex: "status", key: "status" },
        {
            title: "Ações",
            key: "actions",
            render: (_, record) => (
                <>
                    <EditOutlined className="text-blue-500 mr-3 cursor-pointer" />
                    <DeleteOutlined className="text-red-500 cursor-pointer" onClick={() => showDeleteModal(record)} />
                </>
            ),
        },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Usuários</h1>
            <Button type="primary" className="mb-4">Novo Usuário</Button>
            <Table dataSource={users} columns={columns} rowKey="id" />
            <Modal title="Aviso" visible={isModalVisible} onCancel={() => setIsModalVisible(false)} footer={null}>
                <p>Deseja realmente apagar este item?</p>
                <div className="flex justify-end space-x-2">
                    <Button onClick={() => setIsModalVisible(false)}>Não</Button>
                    <Button type="primary" danger onClick={handleDelete}>Sim</Button>
                </div>
            </Modal>
        </div>
    );
};

export default Users;
