import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { ConvertController } from './convert.controller';
import { ConvertService } from './convert.service';
import { ConvertDTo } from './convert.dto';
import { validate } from 'class-validator';
import { stringify } from 'querystring';
import { ValidationError } from '@nestjs/common';

describe('ConvertController', () => {
  let controller: ConvertController;
  let convertDto;
  let errors;

  const createDto = async (roman: any) => {
    const dto = plainToInstance(ConvertDTo, { roman });
    return [dto, await validate(dto)];
  };


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertController],
      providers: [ConvertService],
    }).compile();

    controller = module.get<ConvertController>(ConvertController);
  });

  it('should convert number I to 1.', async () => {
    [convertDto, errors] = await createDto('I');
    expect(errors.length).toBe(0);
    expect(controller.convert(convertDto)).toEqual({"arabic": 1});
  });

  it('should convert number II to 2.', async () => {
    [convertDto, errors] = await createDto('II');
    expect(errors.length).toBe(0);
    expect(controller.convert(convertDto)).toEqual({"arabic": 2});
  });

  it('should convert number V to 5.', async () => {
    const convertDto = plainToInstance(ConvertDTo, { roman: "V" });
    const errors = await validate(convertDto);
    expect(errors.length).toBe(0);
    expect(controller.convert(convertDto)).toEqual({"arabic": 5});
  });

  it('should convert number XX to 20.', async () => {
    const convertDto = plainToInstance(ConvertDTo, { roman: "XX" });
    const errors = await validate(convertDto);
    expect(errors.length).toBe(0);
    expect(controller.convert(convertDto)).toEqual({"arabic": 20});
  });

  it('should convert number D to 500.', async () => {
    const convertDto = plainToInstance(ConvertDTo, { roman: "D" });
    const errors = await validate(convertDto);
    expect(errors.length).toBe(0);
    expect(controller.convert(convertDto)).toEqual({"arabic": 500});
  });


  it('should throw when the number is empty.', async () => {
    [convertDto, errors] = await createDto('');
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(`Invalid number`)
  });

  it('should throw when the number is invalid.', async () => {
    [convertDto, errors] = await createDto('IIIV');
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(`Invalid number`)
  });
});