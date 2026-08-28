// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVpcOriginProps extends cdktn.TerraformMetaArguments {
    /**
    * A complex type that contains zero or more ``Tag`` elements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#tags CcVpcOrigin#tags}
    */
    readonly tags?: CcVpcOrigin.TagProperty[] | cdktn.IResolvable;
    /**
    * The VPC origin endpoint configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#vpc_origin_endpoint_config CcVpcOrigin#vpc_origin_endpoint_config}
    */
    readonly vpcOriginEndpointConfig: CcVpcOrigin.VpcOriginEndpointConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin awscc_cloudfront_vpc_origin}
*/
export class CcVpcOrigin extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_vpc_origin";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVpcOrigin resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVpcOrigin to import
    * @param importFromId The id of the existing CcVpcOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVpcOrigin to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_vpc_origin", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin awscc_cloudfront_vpc_origin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVpcOriginProps
    */
    public constructor(scope: Construct, id: string, config: CcVpcOriginProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_vpc_origin',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._tags.internalValue = config.tags;
        this._vpcOriginEndpointConfig.internalValue = config.vpcOriginEndpointConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVpcOrigin.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVpcOrigin.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_origin_endpoint_config - computed: false, optional: false, required: true
    private _vpcOriginEndpointConfig = new CcVpcOrigin.VpcOriginEndpointConfigPropertyOutputReference(this, "vpc_origin_endpoint_config");
    public get vpcOriginEndpointConfig() {
        return this._vpcOriginEndpointConfig;
    }
    public putVpcOriginEndpointConfig(value: CcVpcOrigin.VpcOriginEndpointConfigProperty) {
        this._vpcOriginEndpointConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcOriginEndpointConfigInput() {
        return this._vpcOriginEndpointConfig.internalValue;
    }

    // vpc_origin_id - computed: true, optional: false, required: false
    public get vpcOriginId() {
        return this.getStringAttribute('vpc_origin_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            tags: cdktn.listMapper(ccVpcOriginTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_origin_endpoint_config: ccVpcOriginVpcOriginEndpointConfigPropertyToTerraform(this._vpcOriginEndpointConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            tags: {
                value: cdktn.listMapperHcl(ccVpcOriginTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVpcOrigin.TagPropertyList",
            },
            vpc_origin_endpoint_config: {
                value: ccVpcOriginVpcOriginEndpointConfigPropertyToHclTerraform(this._vpcOriginEndpointConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVpcOrigin.VpcOriginEndpointConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVpcOriginTagPropertyToTerraform(struct?: CcVpcOrigin.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVpcOriginTagPropertyToHclTerraform(struct?: CcVpcOrigin.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVpcOriginVpcOriginEndpointConfigPropertyToTerraform(struct?: CcVpcOrigin.VpcOriginEndpointConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        http_port: cdktn.numberToTerraform(struct!.httpPort),
        https_port: cdktn.numberToTerraform(struct!.httpsPort),
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        name: cdktn.stringToTerraform(struct!.name),
        origin_protocol_policy: cdktn.stringToTerraform(struct!.originProtocolPolicy),
        origin_ssl_protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.originSslProtocols),
    }
}


export function ccVpcOriginVpcOriginEndpointConfigPropertyToHclTerraform(struct?: CcVpcOrigin.VpcOriginEndpointConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_port: {
            value: cdktn.numberToHclTerraform(struct!.httpPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        https_port: {
            value: cdktn.numberToHclTerraform(struct!.httpsPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        origin_protocol_policy: {
            value: cdktn.stringToHclTerraform(struct!.originProtocolPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        origin_ssl_protocols: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.originSslProtocols),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcVpcOrigin {
export interface TagProperty {
    /**
    * A string that contains ``Tag`` key.
    *  The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#key CcVpcOrigin#key}
    */
    readonly key?: string;
    /**
    * A string that contains an optional ``Tag`` value.
    *  The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#value CcVpcOrigin#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VpcOriginEndpointConfigProperty {
    /**
    * The ARN of the CloudFront VPC origin endpoint configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#arn CcVpcOrigin#arn}
    */
    readonly arn: string;
    /**
    * The HTTP port for the CloudFront VPC origin endpoint configuration. The default value is ``80``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#http_port CcVpcOrigin#http_port}
    */
    readonly httpPort?: number;
    /**
    * The HTTPS port of the CloudFront VPC origin endpoint configuration. The default value is ``443``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#https_port CcVpcOrigin#https_port}
    */
    readonly httpsPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#ip_address_type CcVpcOrigin#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The name of the CloudFront VPC origin endpoint configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#name CcVpcOrigin#name}
    */
    readonly name: string;
    /**
    * The origin protocol policy for the CloudFront VPC origin endpoint configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CcVpcOrigin#origin_protocol_policy}
    */
    readonly originProtocolPolicy?: string;
    /**
    * Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include ``SSLv3``, ``TLSv1``, ``TLSv1.1``, and ``TLSv1.2``.
    *  For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginSSLProtocols) in the *Amazon CloudFront Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_vpc_origin#origin_ssl_protocols CcVpcOrigin#origin_ssl_protocols}
    */
    readonly originSslProtocols?: string[];
}
export class VpcOriginEndpointConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcOriginEndpointConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._httpPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpPort = this._httpPort;
        }
        if (this._httpsPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpsPort = this._httpsPort;
        }
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._originProtocolPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.originProtocolPolicy = this._originProtocolPolicy;
        }
        if (this._originSslProtocols !== undefined) {
            hasAnyValues = true;
            internalValueResult.originSslProtocols = this._originSslProtocols;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcOriginEndpointConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._httpPort = undefined;
            this._httpsPort = undefined;
            this._ipAddressType = undefined;
            this._name = undefined;
            this._originProtocolPolicy = undefined;
            this._originSslProtocols = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._httpPort = value.httpPort;
            this._httpsPort = value.httpsPort;
            this._ipAddressType = value.ipAddressType;
            this._name = value.name;
            this._originProtocolPolicy = value.originProtocolPolicy;
            this._originSslProtocols = value.originSslProtocols;
        }
    }

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // http_port - computed: true, optional: true, required: false
    private _httpPort?: number; 
    public get httpPort() {
        return this.getNumberAttribute('http_port');
    }
    public set httpPort(value: number) {
        this._httpPort = value;
    }
    public resetHttpPort() {
        this._httpPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpPortInput() {
        return this._httpPort;
    }

    // https_port - computed: true, optional: true, required: false
    private _httpsPort?: number; 
    public get httpsPort() {
        return this.getNumberAttribute('https_port');
    }
    public set httpsPort(value: number) {
        this._httpsPort = value;
    }
    public resetHttpsPort() {
        this._httpsPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpsPortInput() {
        return this._httpsPort;
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // origin_protocol_policy - computed: true, optional: true, required: false
    private _originProtocolPolicy?: string; 
    public get originProtocolPolicy() {
        return this.getStringAttribute('origin_protocol_policy');
    }
    public set originProtocolPolicy(value: string) {
        this._originProtocolPolicy = value;
    }
    public resetOriginProtocolPolicy() {
        this._originProtocolPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originProtocolPolicyInput() {
        return this._originProtocolPolicy;
    }

    // origin_ssl_protocols - computed: true, optional: true, required: false
    private _originSslProtocols?: string[]; 
    public get originSslProtocols() {
        return this.getListAttribute('origin_ssl_protocols');
    }
    public set originSslProtocols(value: string[]) {
        this._originSslProtocols = value;
    }
    public resetOriginSslProtocols() {
        this._originSslProtocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originSslProtocolsInput() {
        return this._originSslProtocols;
    }
}
}
