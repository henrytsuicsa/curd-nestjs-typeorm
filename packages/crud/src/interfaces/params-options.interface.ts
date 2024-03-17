import { ParamOptionType } from '@htcsa/crud-request';
import { SwaggerEnumType } from '@nestjs/swagger/dist/types/swagger-enum.type';

export interface ParamsOptions {
  [key: string]: ParamOption;
}

export interface ParamOption {
  field?: string;
  type?: ParamOptionType;
  enum?: SwaggerEnumType;
  primary?: boolean;
  disabled?: boolean;
}
