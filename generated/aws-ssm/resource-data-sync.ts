// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourceDataSyncProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#bucket_name CcResourceDataSync#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#bucket_prefix CcResourceDataSync#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#bucket_region CcResourceDataSync#bucket_region}
    */
    readonly bucketRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#kms_key_arn CcResourceDataSync#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#s3_destination CcResourceDataSync#s3_destination}
    */
    readonly s3Destination?: CcResourceDataSync.S3DestinationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#sync_format CcResourceDataSync#sync_format}
    */
    readonly syncFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#sync_name CcResourceDataSync#sync_name}
    */
    readonly syncName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#sync_source CcResourceDataSync#sync_source}
    */
    readonly syncSource?: CcResourceDataSync.SyncSourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#sync_type CcResourceDataSync#sync_type}
    */
    readonly syncType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync awscc_ssm_resource_data_sync}
*/
export class CcResourceDataSync extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssm_resource_data_sync";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourceDataSync resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourceDataSync to import
    * @param importFromId The id of the existing CcResourceDataSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourceDataSync to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_resource_data_sync", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync awscc_ssm_resource_data_sync} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourceDataSyncProps
    */
    public constructor(scope: Construct, id: string, config: CcResourceDataSyncProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssm_resource_data_sync',
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
        this._bucketName = config.bucketName;
        this._bucketPrefix = config.bucketPrefix;
        this._bucketRegion = config.bucketRegion;
        this._kmsKeyArn = config.kmsKeyArn;
        this._s3Destination.internalValue = config.s3Destination;
        this._syncFormat = config.syncFormat;
        this._syncName = config.syncName;
        this._syncSource.internalValue = config.syncSource;
        this._syncType = config.syncType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // bucket_region - computed: true, optional: true, required: false
    private _bucketRegion?: string; 
    public get bucketRegion() {
        return this.getStringAttribute('bucket_region');
    }
    public set bucketRegion(value: string) {
        this._bucketRegion = value;
    }
    public resetBucketRegion() {
        this._bucketRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketRegionInput() {
        return this._bucketRegion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // s3_destination - computed: true, optional: true, required: false
    private _s3Destination = new CcResourceDataSync.S3DestinationPropertyOutputReference(this, "s3_destination");
    public get s3Destination() {
        return this._s3Destination;
    }
    public putS3Destination(value: CcResourceDataSync.S3DestinationProperty) {
        this._s3Destination.internalValue = value;
    }
    public resetS3Destination() {
        this._s3Destination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DestinationInput() {
        return this._s3Destination.internalValue;
    }

    // sync_format - computed: true, optional: true, required: false
    private _syncFormat?: string; 
    public get syncFormat() {
        return this.getStringAttribute('sync_format');
    }
    public set syncFormat(value: string) {
        this._syncFormat = value;
    }
    public resetSyncFormat() {
        this._syncFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syncFormatInput() {
        return this._syncFormat;
    }

    // sync_name - computed: false, optional: false, required: true
    private _syncName?: string; 
    public get syncName() {
        return this.getStringAttribute('sync_name');
    }
    public set syncName(value: string) {
        this._syncName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get syncNameInput() {
        return this._syncName;
    }

    // sync_source - computed: true, optional: true, required: false
    private _syncSource = new CcResourceDataSync.SyncSourcePropertyOutputReference(this, "sync_source");
    public get syncSource() {
        return this._syncSource;
    }
    public putSyncSource(value: CcResourceDataSync.SyncSourceProperty) {
        this._syncSource.internalValue = value;
    }
    public resetSyncSource() {
        this._syncSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syncSourceInput() {
        return this._syncSource.internalValue;
    }

    // sync_type - computed: true, optional: true, required: false
    private _syncType?: string; 
    public get syncType() {
        return this.getStringAttribute('sync_type');
    }
    public set syncType(value: string) {
        this._syncType = value;
    }
    public resetSyncType() {
        this._syncType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syncTypeInput() {
        return this._syncType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            bucket_name: cdktn.stringToTerraform(this._bucketName),
            bucket_prefix: cdktn.stringToTerraform(this._bucketPrefix),
            bucket_region: cdktn.stringToTerraform(this._bucketRegion),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            s3_destination: ccResourceDataSyncS3DestinationPropertyToTerraform(this._s3Destination.internalValue),
            sync_format: cdktn.stringToTerraform(this._syncFormat),
            sync_name: cdktn.stringToTerraform(this._syncName),
            sync_source: ccResourceDataSyncSyncSourcePropertyToTerraform(this._syncSource.internalValue),
            sync_type: cdktn.stringToTerraform(this._syncType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bucket_name: {
                value: cdktn.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket_prefix: {
                value: cdktn.stringToHclTerraform(this._bucketPrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket_region: {
                value: cdktn.stringToHclTerraform(this._bucketRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            s3_destination: {
                value: ccResourceDataSyncS3DestinationPropertyToHclTerraform(this._s3Destination.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResourceDataSync.S3DestinationProperty",
            },
            sync_format: {
                value: cdktn.stringToHclTerraform(this._syncFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sync_name: {
                value: cdktn.stringToHclTerraform(this._syncName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sync_source: {
                value: ccResourceDataSyncSyncSourcePropertyToHclTerraform(this._syncSource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResourceDataSync.SyncSourceProperty",
            },
            sync_type: {
                value: cdktn.stringToHclTerraform(this._syncType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResourceDataSyncS3DestinationPropertyToTerraform(struct?: CcResourceDataSync.S3DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        bucket_region: cdktn.stringToTerraform(struct!.bucketRegion),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        sync_format: cdktn.stringToTerraform(struct!.syncFormat),
    }
}


export function ccResourceDataSyncS3DestinationPropertyToHclTerraform(struct?: CcResourceDataSync.S3DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_region: {
            value: cdktn.stringToHclTerraform(struct!.bucketRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sync_format: {
            value: cdktn.stringToHclTerraform(struct!.syncFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResourceDataSyncAwsOrganizationsSourcePropertyToTerraform(struct?: CcResourceDataSync.AwsOrganizationsSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        organization_source_type: cdktn.stringToTerraform(struct!.organizationSourceType),
        organizational_units: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationalUnits),
    }
}


export function ccResourceDataSyncAwsOrganizationsSourcePropertyToHclTerraform(struct?: CcResourceDataSync.AwsOrganizationsSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        organization_source_type: {
            value: cdktn.stringToHclTerraform(struct!.organizationSourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organizational_units: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationalUnits),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResourceDataSyncSyncSourcePropertyToTerraform(struct?: CcResourceDataSync.SyncSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_organizations_source: ccResourceDataSyncAwsOrganizationsSourcePropertyToTerraform(struct!.awsOrganizationsSource),
        include_future_regions: cdktn.booleanToTerraform(struct!.includeFutureRegions),
        source_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceRegions),
        source_type: cdktn.stringToTerraform(struct!.sourceType),
    }
}


export function ccResourceDataSyncSyncSourcePropertyToHclTerraform(struct?: CcResourceDataSync.SyncSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_organizations_source: {
            value: ccResourceDataSyncAwsOrganizationsSourcePropertyToHclTerraform(struct!.awsOrganizationsSource),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsOrganizationsSourceProperty",
        },
        include_future_regions: {
            value: cdktn.booleanToHclTerraform(struct!.includeFutureRegions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source_regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceRegions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_type: {
            value: cdktn.stringToHclTerraform(struct!.sourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcResourceDataSync {
export interface S3DestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#bucket_name CcResourceDataSync#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#bucket_prefix CcResourceDataSync#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#bucket_region CcResourceDataSync#bucket_region}
    */
    readonly bucketRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#kms_key_arn CcResourceDataSync#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#sync_format CcResourceDataSync#sync_format}
    */
    readonly syncFormat?: string;
}
export class S3DestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._bucketRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketRegion = this._bucketRegion;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._syncFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.syncFormat = this._syncFormat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._bucketRegion = undefined;
            this._kmsKeyArn = undefined;
            this._syncFormat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._bucketRegion = value.bucketRegion;
            this._kmsKeyArn = value.kmsKeyArn;
            this._syncFormat = value.syncFormat;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // bucket_region - computed: true, optional: true, required: false
    private _bucketRegion?: string; 
    public get bucketRegion() {
        return this.getStringAttribute('bucket_region');
    }
    public set bucketRegion(value: string) {
        this._bucketRegion = value;
    }
    public resetBucketRegion() {
        this._bucketRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketRegionInput() {
        return this._bucketRegion;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // sync_format - computed: true, optional: true, required: false
    private _syncFormat?: string; 
    public get syncFormat() {
        return this.getStringAttribute('sync_format');
    }
    public set syncFormat(value: string) {
        this._syncFormat = value;
    }
    public resetSyncFormat() {
        this._syncFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syncFormatInput() {
        return this._syncFormat;
    }
}
export interface AwsOrganizationsSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#organization_source_type CcResourceDataSync#organization_source_type}
    */
    readonly organizationSourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#organizational_units CcResourceDataSync#organizational_units}
    */
    readonly organizationalUnits?: string[];
}
export class AwsOrganizationsSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsOrganizationsSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._organizationSourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationSourceType = this._organizationSourceType;
        }
        if (this._organizationalUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationalUnits = this._organizationalUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsOrganizationsSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._organizationSourceType = undefined;
            this._organizationalUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._organizationSourceType = value.organizationSourceType;
            this._organizationalUnits = value.organizationalUnits;
        }
    }

    // organization_source_type - computed: true, optional: true, required: false
    private _organizationSourceType?: string; 
    public get organizationSourceType() {
        return this.getStringAttribute('organization_source_type');
    }
    public set organizationSourceType(value: string) {
        this._organizationSourceType = value;
    }
    public resetOrganizationSourceType() {
        this._organizationSourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationSourceTypeInput() {
        return this._organizationSourceType;
    }

    // organizational_units - computed: true, optional: true, required: false
    private _organizationalUnits?: string[]; 
    public get organizationalUnits() {
        return this.getListAttribute('organizational_units');
    }
    public set organizationalUnits(value: string[]) {
        this._organizationalUnits = value;
    }
    public resetOrganizationalUnits() {
        this._organizationalUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitsInput() {
        return this._organizationalUnits;
    }
}
export interface SyncSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#aws_organizations_source CcResourceDataSync#aws_organizations_source}
    */
    readonly awsOrganizationsSource?: AwsOrganizationsSourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#include_future_regions CcResourceDataSync#include_future_regions}
    */
    readonly includeFutureRegions?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#source_regions CcResourceDataSync#source_regions}
    */
    readonly sourceRegions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_resource_data_sync#source_type CcResourceDataSync#source_type}
    */
    readonly sourceType?: string;
}
export class SyncSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SyncSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsOrganizationsSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsOrganizationsSource = this._awsOrganizationsSource?.internalValue;
        }
        if (this._includeFutureRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeFutureRegions = this._includeFutureRegions;
        }
        if (this._sourceRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceRegions = this._sourceRegions;
        }
        if (this._sourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceType = this._sourceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SyncSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsOrganizationsSource.internalValue = undefined;
            this._includeFutureRegions = undefined;
            this._sourceRegions = undefined;
            this._sourceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsOrganizationsSource.internalValue = value.awsOrganizationsSource;
            this._includeFutureRegions = value.includeFutureRegions;
            this._sourceRegions = value.sourceRegions;
            this._sourceType = value.sourceType;
        }
    }

    // aws_organizations_source - computed: true, optional: true, required: false
    private _awsOrganizationsSource = new AwsOrganizationsSourcePropertyOutputReference(this, "aws_organizations_source");
    public get awsOrganizationsSource() {
        return this._awsOrganizationsSource;
    }
    public putAwsOrganizationsSource(value: AwsOrganizationsSourceProperty) {
        this._awsOrganizationsSource.internalValue = value;
    }
    public resetAwsOrganizationsSource() {
        this._awsOrganizationsSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsOrganizationsSourceInput() {
        return this._awsOrganizationsSource.internalValue;
    }

    // include_future_regions - computed: true, optional: true, required: false
    private _includeFutureRegions?: boolean | cdktn.IResolvable; 
    public get includeFutureRegions() {
        return this.getBooleanAttribute('include_future_regions');
    }
    public set includeFutureRegions(value: boolean | cdktn.IResolvable) {
        this._includeFutureRegions = value;
    }
    public resetIncludeFutureRegions() {
        this._includeFutureRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeFutureRegionsInput() {
        return this._includeFutureRegions;
    }

    // source_regions - computed: true, optional: true, required: false
    private _sourceRegions?: string[]; 
    public get sourceRegions() {
        return this.getListAttribute('source_regions');
    }
    public set sourceRegions(value: string[]) {
        this._sourceRegions = value;
    }
    public resetSourceRegions() {
        this._sourceRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceRegionsInput() {
        return this._sourceRegions;
    }

    // source_type - computed: true, optional: true, required: false
    private _sourceType?: string; 
    public get sourceType() {
        return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string) {
        this._sourceType = value;
    }
    public resetSourceType() {
        this._sourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
        return this._sourceType;
    }
}
}
