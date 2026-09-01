// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTrustStoreRevocationProps extends cdktn.TerraformMetaArguments {
    /**
    * The attributes required to create a trust store revocation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#revocation_contents CcTrustStoreRevocation#revocation_contents}
    */
    readonly revocationContents?: CcTrustStoreRevocation.RevocationContentProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the trust store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#trust_store_arn CcTrustStoreRevocation#trust_store_arn}
    */
    readonly trustStoreArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation awscc_elasticloadbalancingv2_trust_store_revocation}
*/
export class CcTrustStoreRevocation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticloadbalancingv2_trust_store_revocation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTrustStoreRevocation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTrustStoreRevocation to import
    * @param importFromId The id of the existing CcTrustStoreRevocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTrustStoreRevocation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_trust_store_revocation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation awscc_elasticloadbalancingv2_trust_store_revocation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTrustStoreRevocationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTrustStoreRevocationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticloadbalancingv2_trust_store_revocation',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._revocationContents.internalValue = config.revocationContents;
        this._trustStoreArn = config.trustStoreArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // revocation_contents - computed: true, optional: true, required: false
    private _revocationContents = new CcTrustStoreRevocation.RevocationContentPropertyList(this, "revocation_contents", true);
    public get revocationContents() {
        return this._revocationContents;
    }
    public putRevocationContents(value: CcTrustStoreRevocation.RevocationContentProperty[] | cdktn.IResolvable) {
        this._revocationContents.internalValue = value;
    }
    public resetRevocationContents() {
        this._revocationContents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revocationContentsInput() {
        return this._revocationContents.internalValue;
    }

    // revocation_id - computed: true, optional: false, required: false
    public get revocationId() {
        return this.getNumberAttribute('revocation_id');
    }

    // trust_store_arn - computed: true, optional: true, required: false
    private _trustStoreArn?: string; 
    public get trustStoreArn() {
        return this.getStringAttribute('trust_store_arn');
    }
    public set trustStoreArn(value: string) {
        this._trustStoreArn = value;
    }
    public resetTrustStoreArn() {
        this._trustStoreArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustStoreArnInput() {
        return this._trustStoreArn;
    }

    // trust_store_revocations - computed: true, optional: false, required: false
    private _trustStoreRevocations = new CcTrustStoreRevocation.TrustStoreRevocationsPropertyList(this, "trust_store_revocations", true);
    public get trustStoreRevocations() {
        return this._trustStoreRevocations;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            revocation_contents: cdktn.listMapper(ccTrustStoreRevocationRevocationContentPropertyToTerraform, false)(this._revocationContents.internalValue),
            trust_store_arn: cdktn.stringToTerraform(this._trustStoreArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            revocation_contents: {
                value: cdktn.listMapperHcl(ccTrustStoreRevocationRevocationContentPropertyToHclTerraform, false)(this._revocationContents.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTrustStoreRevocation.RevocationContentPropertyList",
            },
            trust_store_arn: {
                value: cdktn.stringToHclTerraform(this._trustStoreArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTrustStoreRevocationRevocationContentPropertyToTerraform(struct?: CcTrustStoreRevocation.RevocationContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        revocation_type: cdktn.stringToTerraform(struct!.revocationType),
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
        s3_object_version: cdktn.stringToTerraform(struct!.s3ObjectVersion),
    }
}


export function ccTrustStoreRevocationRevocationContentPropertyToHclTerraform(struct?: CcTrustStoreRevocation.RevocationContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        revocation_type: {
            value: cdktn.stringToHclTerraform(struct!.revocationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key: {
            value: cdktn.stringToHclTerraform(struct!.s3Key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_object_version: {
            value: cdktn.stringToHclTerraform(struct!.s3ObjectVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTrustStoreRevocationTrustStoreRevocationsPropertyToTerraform(struct?: CcTrustStoreRevocation.TrustStoreRevocationsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccTrustStoreRevocationTrustStoreRevocationsPropertyToHclTerraform(struct?: CcTrustStoreRevocation.TrustStoreRevocationsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcTrustStoreRevocation {
export interface RevocationContentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#revocation_type CcTrustStoreRevocation#revocation_type}
    */
    readonly revocationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#s3_bucket CcTrustStoreRevocation#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#s3_key CcTrustStoreRevocation#s3_key}
    */
    readonly s3Key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store_revocation#s3_object_version CcTrustStoreRevocation#s3_object_version}
    */
    readonly s3ObjectVersion?: string;
}
export class RevocationContentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RevocationContentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._revocationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.revocationType = this._revocationType;
        }
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3Key !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key;
        }
        if (this._s3ObjectVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3ObjectVersion = this._s3ObjectVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RevocationContentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._revocationType = undefined;
            this._s3Bucket = undefined;
            this._s3Key = undefined;
            this._s3ObjectVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._revocationType = value.revocationType;
            this._s3Bucket = value.s3Bucket;
            this._s3Key = value.s3Key;
            this._s3ObjectVersion = value.s3ObjectVersion;
        }
    }

    // revocation_type - computed: true, optional: true, required: false
    private _revocationType?: string; 
    public get revocationType() {
        return this.getStringAttribute('revocation_type');
    }
    public set revocationType(value: string) {
        this._revocationType = value;
    }
    public resetRevocationType() {
        this._revocationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revocationTypeInput() {
        return this._revocationType;
    }

    // s3_bucket - computed: true, optional: true, required: false
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    public resetS3Bucket() {
        this._s3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_key - computed: true, optional: true, required: false
    private _s3Key?: string; 
    public get s3Key() {
        return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string) {
        this._s3Key = value;
    }
    public resetS3Key() {
        this._s3Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key;
    }

    // s3_object_version - computed: true, optional: true, required: false
    private _s3ObjectVersion?: string; 
    public get s3ObjectVersion() {
        return this.getStringAttribute('s3_object_version');
    }
    public set s3ObjectVersion(value: string) {
        this._s3ObjectVersion = value;
    }
    public resetS3ObjectVersion() {
        this._s3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ObjectVersionInput() {
        return this._s3ObjectVersion;
    }
}

export class RevocationContentPropertyList extends cdktn.ComplexList {
    public internalValue? : RevocationContentProperty[] | cdktn.IResolvable

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
    public get(index: number): RevocationContentPropertyOutputReference {
        return new RevocationContentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TrustStoreRevocationsProperty {
}
export class TrustStoreRevocationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TrustStoreRevocationsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrustStoreRevocationsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // number_of_revoked_entries - computed: true, optional: false, required: false
    public get numberOfRevokedEntries() {
        return this.getNumberAttribute('number_of_revoked_entries');
    }

    // revocation_id - computed: true, optional: false, required: false
    public get revocationId() {
        return this.getStringAttribute('revocation_id');
    }

    // revocation_type - computed: true, optional: false, required: false
    public get revocationType() {
        return this.getStringAttribute('revocation_type');
    }

    // trust_store_arn - computed: true, optional: false, required: false
    public get trustStoreArn() {
        return this.getStringAttribute('trust_store_arn');
    }
}

export class TrustStoreRevocationsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): TrustStoreRevocationsPropertyOutputReference {
        return new TrustStoreRevocationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
