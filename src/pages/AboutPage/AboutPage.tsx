
import { Card, Typography, Row, Col } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const AboutPage = () => {
  return (
    <div className="py-10 px-5 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement Section */}
        <Row gutter={[16, 16]} justify="center">
          <Col span={24}>
            <Card className="shadow-lg rounded-lg p-6">
              <Title level={2} className="text-center text-gray-800">Our Mission</Title>
              <Paragraph className="text-lg text-gray-600 text-center">
                Our goal is to provide high-quality products at affordable prices while ensuring excellent customer service. We are committed to making the online shopping experience as seamless as possible for our customers.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Team Section */}
        <Row gutter={[16, 16]} className="mt-8" justify="center">
          <Col span={24}>
            <Card className="shadow-lg rounded-lg p-6">
              <Title level={2} className="text-center text-gray-800">Meet Our Team</Title>
              <Paragraph className="text-lg text-gray-600 text-center">
                We are a passionate team of developers, designers, and business experts who strive to deliver the best experience for our users.
              </Paragraph>
              {/* Add team member details here */}
            </Card>
          </Col>
        </Row>

        {/* History & Milestones Section */}
        <Row gutter={[16, 16]} className="mt-8" justify="center">
          <Col span={24}>
            <Card className="shadow-lg rounded-lg p-6">
              <Title level={2} className="text-center text-gray-800">History & Milestones</Title>
              <Paragraph className="text-lg text-gray-600 text-center">
                Since our inception in [Year], we have grown to become a trusted name in the industry. Our milestones include [add milestones here].
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Contact Information */}
        <Row gutter={[16, 16]} className="mt-8" justify="center">
          <Col span={24}>
            <Card className="shadow-lg rounded-lg p-6">
              <Title level={2} className="text-center text-gray-800">Contact Us</Title>
              <div className="flex justify-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <PhoneOutlined />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MailOutlined />
                  <span>info@example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvironmentOutlined />
                  <span>123 Main Street, City, Country</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;
