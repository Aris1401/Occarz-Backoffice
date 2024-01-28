import { CheckCircleOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Carousel, Flex, Image, Typography, message } from 'antd'
import Title from 'antd/es/skeleton/Title'
import numeral from 'numeral';
import React from 'react'
import { validerAnnonce } from '../../services/annonces/AnnoncesServices';

const Annonce = (props) => {
    // Message
    const [ messageApi, contextHolder ] = message.useMessage()

    const { annonce, update } = props;

    // Typographie
    const { Title, Paragraph } = Typography;

    let imageStyle = {
        width: 200,
        height: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    }
    
    // Valider annonce
    const handleValiderAnnonce = () => {
        validerAnnonce(annonce.id).then((data) => {
            messageApi.info(data.data)
        })

        // Update page
        update()
    }

    return (
        <Card style={{ padding: 0, margin: 0 }}
            hoverable
            bordered
            bodyStyle={{ padding: 0 }}
        >
            <Flex gap={10} style={{ width: '100%' }}>
                <div>
                    <Image
                        alt="example"
                        style={imageStyle}
                        src="https://s3.amazonaws.com/thumbnails.venngage.com/template/a8897941-0545-4eaa-a427-76503a01b7e7.png"
                    />
                </div>

                <div style={{ width: '100%' }}>
                    <Flex style={{ padding: '.8rem', width: '100%' }} justify='space-between'>
                        <Flex vertical justify='space-between'>
                            <Title level={5} style={{ padding: 0, margin: 0 }}>{ annonce.titre }</Title>
                            <Paragraph style={{ fontSize: '.8rem', color: 'rgba(0,0,0, 0.4)' }}>
                                { annonce.description }
                            </Paragraph>

                            <Flex gap={5} wrap='wrap'>
                                { annonce.labels.map(label => {
                                    return <Badge size='small' text={label} color='blue' />
                                })}
                            </Flex>
                        </Flex>

                        <Flex vertical style={{ textAlign: 'right' }} justify='space-between'>
                            <Flex vertical>
                                <Paragraph strong style={{ margin: 0 }}>
                                    { numeral(annonce.prix).format("0,0") } Ar
                                </Paragraph>

                                <Paragraph style={{ fontSize: '.6rem', margin: 0, color: 'rgba(0,0,0, 0.7)' }}>
                                    { annonce.utilisateur.nom + " " + annonce.utilisateur.prenom } - { new Date(annonce.dateAnnonce).toLocaleDateString('fr-FR', {day: '2-digit', month: 'short', year: 'numeric'}) }
                                </Paragraph>
                            </Flex>

                            <Button shape='round' type='primary' icon={<CheckCircleOutlined />} size='small'
                                onClick={(e) => {
                                    handleValiderAnnonce()
                                }}
                            >Valider</Button>
                        </Flex>
                    </Flex>
                </div>
            </Flex>
        </Card>
    )
}

export default Annonce