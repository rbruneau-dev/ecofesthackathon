import React from 'react';
import styled from 'styled-components';
import jsonFood from '../../data/foodData.json';
import jsonTransport from '../../data/transportData.json';
import Slider from './components/Slider';
import Toggle from './components/Toggle';
import Select from './components/Select';

const StyledForm = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 30px;
  margin-top: 30px;
`;
const InputGroup = styled.div`
  min-height: 100px;
  width: 45%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
  label {
    text-align: left;
    line-height: 20px;
    margin-bottom: 20px;
  }

  .choice-select {
    width: 200px;
  }

  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-radius: 10px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ type, updateData, data }: any) => {
  const dataJson = type === 'food' ? jsonFood : jsonTransport;

  return (
    <StyledForm>
      {dataJson.map((d) => {
        const findDefault = data.find((r: any) => r.key === d.key);
        const defaultValue = findDefault?.value || 0;

        return (
          <InputGroup key={d.key}>
            {d.type === 'number' && (
              <React.Fragment>
                <label>{d.title}</label>
                <Slider
                  key={`${d.key}`}
                  min={1}
                  max={d.max || 1000}
                  ystep={1000}
                  defaultValue={defaultValue}
                  unit={d.unit || 'pers'}
                  onChange={(value: any) => {
                    if (
                      data.filter((resp: any) => resp.key === d.key).length ===
                      0
                    ) {
                      const response = {
                        key: d.key,
                        title: d.title,
                        value,
                        type,
                      };

                      if (response.value !== undefined) {
                        updateData((prev: any) => [...prev, response]);
                      }
                    } else {
                      const updateResponse = data.map((resp: any) => {
                        if (resp.key === d.key) {
                          resp.value = value;
                        }

                        return resp;
                      });

                      if (value !== undefined) updateData(updateResponse);
                    }
                  }}
                />
              </React.Fragment>
            )}

            {d.type === 'boolean' && (
              <React.Fragment>
                <label>{d.title}</label>
                <Toggle
                  onChange={(value: boolean) => {
                    if (
                      data.filter((resp: any) => resp.key === d.key).length ===
                      0
                    ) {
                      const response = {
                        key: d.key,
                        title: d.title,
                        value,
                        type,
                      };
                      if (response.value !== undefined) {
                        updateData((prev: any) => [...prev, response]);
                      }
                    } else {
                      const updateResponse = data.map((resp: any) => {
                        if (resp.key === d.key) {
                          resp.value = value;
                        }

                        return resp;
                      });
                      if (value !== undefined) updateData(updateResponse);
                    }
                  }}
                />
              </React.Fragment>
            )}

            {d.type === 'multiple' && (
              <React.Fragment>
                <label>{d.title}</label>
                <Select
                  onChange={(value: any) => {
                    if (
                      data.filter((resp: any) => resp.key === `${d.key}`)
                        .length === 0
                    ) {
                      const response = {
                        key: `${d.key}`,
                        title: d.title,
                        value,
                        type,
                      };

                      if (response.value !== undefined) {
                        updateData((prev: any) => [...prev, response]);
                      }
                    } else {
                      const updateResponse = data.map((resp: any) => {
                        if (resp.key === d.key) {
                          resp.value = value;
                        }

                        return resp;
                      });
                      if (value !== undefined) updateData(updateResponse);
                    }
                  }}
                  defaultValue={defaultValue}
                  options={d.choices}
                />
              </React.Fragment>
            )}

            {d.type === 'collection' && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <label>{d.title}</label>
                {d.fields?.map((f: any) => {
                  return (
                    <React.Fragment>
                      <label>{f.name}</label>
                      <Slider
                        key={`${d.key}-${f.key}`}
                        min={1}
                        max={f.max || 100}
                        ystep={1}
                        defaultValue={defaultValue}
                        unit={f.unit || '%'}
                        onChange={(value: any) => {
                          if (
                            data.filter(
                              (resp: any) => resp.key === `${d.key}-${f.key}`
                            ).length === 0
                          ) {
                            const response = {
                              key: `${d.key}-${f.key}`,
                              title: f.name,
                              value,
                              type,
                            };
                            if (response.value !== undefined) {
                              updateData((prev: any) => [...prev, response]);
                            }
                          } else {
                            const updateResponse = data.map((resp: any) => {
                              if (resp.key === `${d.key}-${f.key}`) {
                                resp.value = value;
                              }

                              return resp;
                            });
                            if (value !== undefined) updateData(updateResponse);
                          }
                        }}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </InputGroup>
        );
      })}
    </StyledForm>
  );
};
