import { Form, Input, Button, Space ,Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { Option } = Select;
const AddLocation = () => {
  //select before
  const selectBefore = (
    <Select
      // key={vvalue}
      defaultValue="Postcode/Zipcode"
      className="select-before"
      onChange={(value, key, index) => {
        console.log(value, key, index);
        // const vvalue = value
      }}
    >
      <Option value="Postcode/Zipcode">Postcode/Zipcode</Option>
      <Option value="City">City</Option>
    </Select>
  );
  //select after
  const selectAfter = (
    <Select
      defaultValue="Select radius of availablity in miles"
      className="select-after"
    >
      <Option value="2 miles">2 miles</Option>
      <Option value="5 miles">5 miles</Option>
      <Option value="10 miles">10 miles</Option>
      <Option value="15 miles">15 miles</Option>
      <Option value="25 miles">25 miles</Option>
      <Option value="50 miles">50 miles</Option>
      <Option value="75 miles">75 miles</Option>
      <Option value="100 miles">100 miles</Option>
      <Option value="+100 miles">+100 miles</Option>
    </Select>
  );
  return (
    <>
      <Form.Item
        // {...restField}
        name={["package", ""]}
        // fieldKey={[fieldKey, "first"]}
        rules={[{ required: true, message: "Missing Location" }]}
      >
        <Input
          addonBefore={selectBefore}
          addonAfter={selectAfter}
          placeholder="Enter Your Location"
        />
      </Form.Item>
      <Form.List name="Location">
        {(fields, { add, remove }) => (
          <div>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "location"]}
                  fieldKey={[fieldKey, "location"]}
                  rules={[{ required: true, message: "Missing Location" }]}
                >
                  <Input
                    key={1}
                    addonBefore={selectBefore}
                    addonAfter={selectAfter}
                    placeholder="Enter Your Location"
                  />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add a new location
              </Button>
            </Form.Item>
          </div>
        )}
      </Form.List>{" "}
    </>
  );
};

export default AddLocation;
