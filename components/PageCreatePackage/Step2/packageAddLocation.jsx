import { Form, Input, Button, Space, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { Option } = Select;
const saa=(i)=>{
  console.log(i);
}
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 24,
  },
};
const PackageAddLocation = (props) => {
  //select before
  const selectBefore = (
    <Select
      // key={vvalue}
      defaultValue="Postcode/Zipcode"
      className="select-before"
      onChange={props.handleAddBefore}
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
      <Form.Item style={{ display: props.displayLocation }}>
        {/* <Form.Item
          // {...restField}
          // name={["package", ""]}
          // fieldKey={[fieldKey, "first"]}
          rules={[{ required: true, message: "Missing Location" }]}
          style={{ width: "98%" }}
        >
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            placeholder="Enter Your Location"
          />
        </Form.Item> */}
        <Form.List name="Location">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map(({ key, name, fieldKey,...restField }) => (
                  <Space
                    className="add-location"
                    key={key}
                    style={{ display: "flex", width: "100%", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "location"]}
                      fieldKey={[fieldKey, "location"]}
                      rules={[{ required: true, message: "Missing Location" }]}
                      wrapperCol={{ ...layout.wrapperCol, offset: 0 }}
                      style={{ width: "100%" }}
                    >
                      <Input
                        key={key}
                        addonBefore={selectBefore}
                        addonAfter={
                          // props.isAddBefore 
                          
                            // saa(fieldKey[1])
                            props.isAddBefore 
                            ? 
                            selectAfter 
                            : 
                            null
                          
                        }
                        placeholder="Enter Your Location"
                      />
                    </Form.Item>

                    <MinusCircleOutlined
                      onClick={() => {
                        remove(name);
                        console.log(key);
                      }}
                    />
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
            );
          }}
        </Form.List>
      </Form.Item>
    </>
  );
};

export default PackageAddLocation;
