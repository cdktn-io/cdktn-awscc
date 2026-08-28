// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcaconnectorad_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcaconnectorad_connector#certificate_authority_arn CcConnector#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcaconnectorad_connector#directory_id CcConnector#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcaconnectorad_connector#tags CcConnector#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcaconnectorad_connector#vpc_information CcConnector#vpc_information}
    */
    readonly vpcInformation: CcConnector.VpcInformationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcaconnectorad_connector awscc_pcaconnectorad_connector}
*/
export class CcConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pcaconnectorad_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnector to import
    * @param importFromId The id of the existing CcConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcaconnectorad_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcaconnectorad_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcaconnectorad_connector awscc_pcaconnectorad_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pcaconnectorad_connector',
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
        this._certificateAuthorityArn = config.certificateAuthorityArn;
        this._directoryId = config.directoryId;
        this._tags = config.tags;
        this._vpcInformation.internalValue = config.vpcInformation;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_authority_arn - computed: false, optional: false, required: true
    private _certificateAuthorityArn?: string; 
    public get certificateAuthorityArn() {
        return this.getStringAttribute('certificate_authority_arn');
    }
    public set certificateAuthorityArn(value: string) {
        this._certificateAuthorityArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnInput() {
        return this._certificateAuthorityArn;
    }

    // connector_arn - computed: true, optional: false, required: false
    public get connectorArn() {
        return this.getStringAttribute('connector_arn');
    }

    // directory_id - computed: false, optional: false, required: true
    private _directoryId?: string; 
    public get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
        this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
        return this._directoryId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // vpc_information - computed: false, optional: false, required: true
    private _vpcInformation = new CcConnector.VpcInformationPropertyOutputReference(this, "vpc_information");
    public get vpcInformation() {
        return this._vpcInformation;
    }
    public putVpcInformation(value: CcConnector.VpcInformationProperty) {
        this._vpcInformation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInformationInput() {
        return this._vpcInformation.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            certificate_authority_arn: cdktn.stringToTerraform(this._certificateAuthorityArn),
            directory_id: cdktn.stringToTerraform(this._directoryId),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            vpc_information: ccConnectorVpcInformationPropertyToTerraform(this._vpcInformation.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_authority_arn: {
                value: cdktn.stringToHclTerraform(this._certificateAuthorityArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            directory_id: {
                value: cdktn.stringToHclTerraform(this._directoryId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            vpc_information: {
                value: ccConnectorVpcInformationPropertyToHclTerraform(this._vpcInformation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.VpcInformationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectorVpcInformationPropertyToTerraform(struct?: CcConnector.VpcInformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    }
}


export function ccConnectorVpcInformationPropertyToHclTerraform(struct?: CcConnector.VpcInformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConnector {
export interface VpcInformationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcaconnectorad_connector#ip_address_type CcConnector#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcaconnectorad_connector#security_group_ids CcConnector#security_group_ids}
    */
    readonly securityGroupIds: string[];
}
export class VpcInformationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcInformationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcInformationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipAddressType = undefined;
            this._securityGroupIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipAddressType = value.ipAddressType;
            this._securityGroupIds = value.securityGroupIds;
        }
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

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }
}
}
