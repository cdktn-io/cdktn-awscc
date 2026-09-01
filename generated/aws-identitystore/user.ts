// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of addresses associated with the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#addresses CcUser#addresses}
    */
    readonly addresses?: CcUser.AddressesProperty[] | cdktn.IResolvable;
    /**
    * The user's birthdate in YYYY-MM-DD format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#birthdate CcUser#birthdate}
    */
    readonly birthdate?: string;
    /**
    * A string containing the name of the user for display.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display_name CcUser#display_name}
    */
    readonly displayName?: string;
    /**
    * A list of email addresses associated with the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#emails CcUser#emails}
    */
    readonly emails?: CcUser.EmailsProperty[] | cdktn.IResolvable;
    /**
    * The globally unique identifier for the identity store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#identity_store_id CcUser#identity_store_id}
    */
    readonly identityStoreId: string;
    /**
    * The geographical region or location of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locale CcUser#locale}
    */
    readonly locale?: string;
    /**
    * The name of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#name CcUser#name}
    */
    readonly name?: CcUser.NameProperty;
    /**
    * An alternate name for the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#nick_name CcUser#nick_name}
    */
    readonly nickName?: string;
    /**
    * A list of phone numbers associated with the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#phone_numbers CcUser#phone_numbers}
    */
    readonly phoneNumbers?: CcUser.PhoneNumbersProperty[] | cdktn.IResolvable;
    /**
    * A list of photos associated with the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#photos CcUser#photos}
    */
    readonly photos?: CcUser.PhotosProperty[] | cdktn.IResolvable;
    /**
    * The preferred language of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#preferred_language CcUser#preferred_language}
    */
    readonly preferredLanguage?: string;
    /**
    * A URL associated with the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#profile_url CcUser#profile_url}
    */
    readonly profileUrl?: string;
    /**
    * A list of roles associated with the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#roles CcUser#roles}
    */
    readonly roles?: CcUser.RolesProperty[] | cdktn.IResolvable;
    /**
    * The time zone for the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#timezone CcUser#timezone}
    */
    readonly timezone?: string;
    /**
    * The title of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#title CcUser#title}
    */
    readonly title?: string;
    /**
    * A unique string used to identify the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_name CcUser#user_name}
    */
    readonly userName?: string;
    /**
    * A string indicating the type of user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_type CcUser#user_type}
    */
    readonly userType?: string;
    /**
    * The user's personal website or blog URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#website CcUser#website}
    */
    readonly website?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user awscc_identitystore_user}
*/
export class CcUser extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_identitystore_user";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUser resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUser to import
    * @param importFromId The id of the existing CcUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUser to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_identitystore_user", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user awscc_identitystore_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserProps
    */
    public constructor(scope: Construct, id: string, config: CcUserProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_identitystore_user',
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
        this._addresses.internalValue = config.addresses;
        this._birthdate = config.birthdate;
        this._displayName = config.displayName;
        this._emails.internalValue = config.emails;
        this._identityStoreId = config.identityStoreId;
        this._locale = config.locale;
        this._name.internalValue = config.name;
        this._nickName = config.nickName;
        this._phoneNumbers.internalValue = config.phoneNumbers;
        this._photos.internalValue = config.photos;
        this._preferredLanguage = config.preferredLanguage;
        this._profileUrl = config.profileUrl;
        this._roles.internalValue = config.roles;
        this._timezone = config.timezone;
        this._title = config.title;
        this._userName = config.userName;
        this._userType = config.userType;
        this._website = config.website;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // addresses - computed: true, optional: true, required: false
    private _addresses = new CcUser.AddressesPropertyList(this, "addresses", false);
    public get addresses() {
        return this._addresses;
    }
    public putAddresses(value: CcUser.AddressesProperty[] | cdktn.IResolvable) {
        this._addresses.internalValue = value;
    }
    public resetAddresses() {
        this._addresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressesInput() {
        return this._addresses.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // birthdate - computed: true, optional: true, required: false
    private _birthdate?: string; 
    public get birthdate() {
        return this.getStringAttribute('birthdate');
    }
    public set birthdate(value: string) {
        this._birthdate = value;
    }
    public resetBirthdate() {
        this._birthdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get birthdateInput() {
        return this._birthdate;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // emails - computed: true, optional: true, required: false
    private _emails = new CcUser.EmailsPropertyList(this, "emails", false);
    public get emails() {
        return this._emails;
    }
    public putEmails(value: CcUser.EmailsProperty[] | cdktn.IResolvable) {
        this._emails.internalValue = value;
    }
    public resetEmails() {
        this._emails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailsInput() {
        return this._emails.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_store_id - computed: false, optional: false, required: true
    private _identityStoreId?: string; 
    public get identityStoreId() {
        return this.getStringAttribute('identity_store_id');
    }
    public set identityStoreId(value: string) {
        this._identityStoreId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityStoreIdInput() {
        return this._identityStoreId;
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
    }

    // name - computed: true, optional: true, required: false
    private _name = new CcUser.NamePropertyOutputReference(this, "name");
    public get name() {
        return this._name;
    }
    public putName(value: CcUser.NameProperty) {
        this._name.internalValue = value;
    }
    public resetName() {
        this._name.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name.internalValue;
    }

    // nick_name - computed: true, optional: true, required: false
    private _nickName?: string; 
    public get nickName() {
        return this.getStringAttribute('nick_name');
    }
    public set nickName(value: string) {
        this._nickName = value;
    }
    public resetNickName() {
        this._nickName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nickNameInput() {
        return this._nickName;
    }

    // phone_numbers - computed: true, optional: true, required: false
    private _phoneNumbers = new CcUser.PhoneNumbersPropertyList(this, "phone_numbers", false);
    public get phoneNumbers() {
        return this._phoneNumbers;
    }
    public putPhoneNumbers(value: CcUser.PhoneNumbersProperty[] | cdktn.IResolvable) {
        this._phoneNumbers.internalValue = value;
    }
    public resetPhoneNumbers() {
        this._phoneNumbers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phoneNumbersInput() {
        return this._phoneNumbers.internalValue;
    }

    // photos - computed: true, optional: true, required: false
    private _photos = new CcUser.PhotosPropertyList(this, "photos", false);
    public get photos() {
        return this._photos;
    }
    public putPhotos(value: CcUser.PhotosProperty[] | cdktn.IResolvable) {
        this._photos.internalValue = value;
    }
    public resetPhotos() {
        this._photos.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get photosInput() {
        return this._photos.internalValue;
    }

    // preferred_language - computed: true, optional: true, required: false
    private _preferredLanguage?: string; 
    public get preferredLanguage() {
        return this.getStringAttribute('preferred_language');
    }
    public set preferredLanguage(value: string) {
        this._preferredLanguage = value;
    }
    public resetPreferredLanguage() {
        this._preferredLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredLanguageInput() {
        return this._preferredLanguage;
    }

    // profile_url - computed: true, optional: true, required: false
    private _profileUrl?: string; 
    public get profileUrl() {
        return this.getStringAttribute('profile_url');
    }
    public set profileUrl(value: string) {
        this._profileUrl = value;
    }
    public resetProfileUrl() {
        this._profileUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileUrlInput() {
        return this._profileUrl;
    }

    // roles - computed: true, optional: true, required: false
    private _roles = new CcUser.RolesPropertyList(this, "roles", false);
    public get roles() {
        return this._roles;
    }
    public putRoles(value: CcUser.RolesProperty[] | cdktn.IResolvable) {
        this._roles.internalValue = value;
    }
    public resetRoles() {
        this._roles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesInput() {
        return this._roles.internalValue;
    }

    // timezone - computed: true, optional: true, required: false
    private _timezone?: string; 
    public get timezone() {
        return this.getStringAttribute('timezone');
    }
    public set timezone(value: string) {
        this._timezone = value;
    }
    public resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
        return this._timezone;
    }

    // title - computed: true, optional: true, required: false
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    public resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // updated_by - computed: true, optional: false, required: false
    public get updatedBy() {
        return this.getStringAttribute('updated_by');
    }

    // user_id - computed: true, optional: false, required: false
    public get userId() {
        return this.getStringAttribute('user_id');
    }

    // user_name - computed: true, optional: true, required: false
    private _userName?: string; 
    public get userName() {
        return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
        this._userName = value;
    }
    public resetUserName() {
        this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
        return this._userName;
    }

    // user_status - computed: true, optional: false, required: false
    public get userStatus() {
        return this.getStringAttribute('user_status');
    }

    // user_type - computed: true, optional: true, required: false
    private _userType?: string; 
    public get userType() {
        return this.getStringAttribute('user_type');
    }
    public set userType(value: string) {
        this._userType = value;
    }
    public resetUserType() {
        this._userType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userTypeInput() {
        return this._userType;
    }

    // website - computed: true, optional: true, required: false
    private _website?: string; 
    public get website() {
        return this.getStringAttribute('website');
    }
    public set website(value: string) {
        this._website = value;
    }
    public resetWebsite() {
        this._website = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get websiteInput() {
        return this._website;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            addresses: cdktn.listMapper(ccUserAddressesPropertyToTerraform, false)(this._addresses.internalValue),
            birthdate: cdktn.stringToTerraform(this._birthdate),
            display_name: cdktn.stringToTerraform(this._displayName),
            emails: cdktn.listMapper(ccUserEmailsPropertyToTerraform, false)(this._emails.internalValue),
            identity_store_id: cdktn.stringToTerraform(this._identityStoreId),
            locale: cdktn.stringToTerraform(this._locale),
            name: ccUserNamePropertyToTerraform(this._name.internalValue),
            nick_name: cdktn.stringToTerraform(this._nickName),
            phone_numbers: cdktn.listMapper(ccUserPhoneNumbersPropertyToTerraform, false)(this._phoneNumbers.internalValue),
            photos: cdktn.listMapper(ccUserPhotosPropertyToTerraform, false)(this._photos.internalValue),
            preferred_language: cdktn.stringToTerraform(this._preferredLanguage),
            profile_url: cdktn.stringToTerraform(this._profileUrl),
            roles: cdktn.listMapper(ccUserRolesPropertyToTerraform, false)(this._roles.internalValue),
            timezone: cdktn.stringToTerraform(this._timezone),
            title: cdktn.stringToTerraform(this._title),
            user_name: cdktn.stringToTerraform(this._userName),
            user_type: cdktn.stringToTerraform(this._userType),
            website: cdktn.stringToTerraform(this._website),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            addresses: {
                value: cdktn.listMapperHcl(ccUserAddressesPropertyToHclTerraform, false)(this._addresses.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUser.AddressesPropertyList",
            },
            birthdate: {
                value: cdktn.stringToHclTerraform(this._birthdate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            emails: {
                value: cdktn.listMapperHcl(ccUserEmailsPropertyToHclTerraform, false)(this._emails.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUser.EmailsPropertyList",
            },
            identity_store_id: {
                value: cdktn.stringToHclTerraform(this._identityStoreId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            locale: {
                value: cdktn.stringToHclTerraform(this._locale),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: ccUserNamePropertyToHclTerraform(this._name.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUser.NameProperty",
            },
            nick_name: {
                value: cdktn.stringToHclTerraform(this._nickName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            phone_numbers: {
                value: cdktn.listMapperHcl(ccUserPhoneNumbersPropertyToHclTerraform, false)(this._phoneNumbers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUser.PhoneNumbersPropertyList",
            },
            photos: {
                value: cdktn.listMapperHcl(ccUserPhotosPropertyToHclTerraform, false)(this._photos.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUser.PhotosPropertyList",
            },
            preferred_language: {
                value: cdktn.stringToHclTerraform(this._preferredLanguage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_url: {
                value: cdktn.stringToHclTerraform(this._profileUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            roles: {
                value: cdktn.listMapperHcl(ccUserRolesPropertyToHclTerraform, false)(this._roles.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUser.RolesPropertyList",
            },
            timezone: {
                value: cdktn.stringToHclTerraform(this._timezone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            title: {
                value: cdktn.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_name: {
                value: cdktn.stringToHclTerraform(this._userName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_type: {
                value: cdktn.stringToHclTerraform(this._userType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            website: {
                value: cdktn.stringToHclTerraform(this._website),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserAddressesPropertyToTerraform(struct?: CcUser.AddressesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        country: cdktn.stringToTerraform(struct!.country),
        formatted: cdktn.stringToTerraform(struct!.formatted),
        locality: cdktn.stringToTerraform(struct!.locality),
        postal_code: cdktn.stringToTerraform(struct!.postalCode),
        primary: cdktn.booleanToTerraform(struct!.primary),
        region: cdktn.stringToTerraform(struct!.region),
        street_address: cdktn.stringToTerraform(struct!.streetAddress),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccUserAddressesPropertyToHclTerraform(struct?: CcUser.AddressesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        country: {
            value: cdktn.stringToHclTerraform(struct!.country),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        formatted: {
            value: cdktn.stringToHclTerraform(struct!.formatted),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locality: {
            value: cdktn.stringToHclTerraform(struct!.locality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        postal_code: {
            value: cdktn.stringToHclTerraform(struct!.postalCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary: {
            value: cdktn.booleanToHclTerraform(struct!.primary),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        street_address: {
            value: cdktn.stringToHclTerraform(struct!.streetAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserEmailsPropertyToTerraform(struct?: CcUser.EmailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        primary: cdktn.booleanToTerraform(struct!.primary),
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUserEmailsPropertyToHclTerraform(struct?: CcUser.EmailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        primary: {
            value: cdktn.booleanToHclTerraform(struct!.primary),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccUserNamePropertyToTerraform(struct?: CcUser.NameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        family_name: cdktn.stringToTerraform(struct!.familyName),
        formatted: cdktn.stringToTerraform(struct!.formatted),
        given_name: cdktn.stringToTerraform(struct!.givenName),
        honorific_prefix: cdktn.stringToTerraform(struct!.honorificPrefix),
        honorific_suffix: cdktn.stringToTerraform(struct!.honorificSuffix),
        middle_name: cdktn.stringToTerraform(struct!.middleName),
    }
}


export function ccUserNamePropertyToHclTerraform(struct?: CcUser.NameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        family_name: {
            value: cdktn.stringToHclTerraform(struct!.familyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        formatted: {
            value: cdktn.stringToHclTerraform(struct!.formatted),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        given_name: {
            value: cdktn.stringToHclTerraform(struct!.givenName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        honorific_prefix: {
            value: cdktn.stringToHclTerraform(struct!.honorificPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        honorific_suffix: {
            value: cdktn.stringToHclTerraform(struct!.honorificSuffix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        middle_name: {
            value: cdktn.stringToHclTerraform(struct!.middleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPhoneNumbersPropertyToTerraform(struct?: CcUser.PhoneNumbersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        primary: cdktn.booleanToTerraform(struct!.primary),
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUserPhoneNumbersPropertyToHclTerraform(struct?: CcUser.PhoneNumbersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        primary: {
            value: cdktn.booleanToHclTerraform(struct!.primary),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccUserPhotosPropertyToTerraform(struct?: CcUser.PhotosProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        display: cdktn.stringToTerraform(struct!.display),
        primary: cdktn.booleanToTerraform(struct!.primary),
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUserPhotosPropertyToHclTerraform(struct?: CcUser.PhotosProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        display: {
            value: cdktn.stringToHclTerraform(struct!.display),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary: {
            value: cdktn.booleanToHclTerraform(struct!.primary),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccUserRolesPropertyToTerraform(struct?: CcUser.RolesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        primary: cdktn.booleanToTerraform(struct!.primary),
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUserRolesPropertyToHclTerraform(struct?: CcUser.RolesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        primary: {
            value: cdktn.booleanToHclTerraform(struct!.primary),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export namespace CcUser {
export interface AddressesProperty {
    /**
    * The country of the address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#country CcUser#country}
    */
    readonly country?: string;
    /**
    * A formatted version of the address for display.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#formatted CcUser#formatted}
    */
    readonly formatted?: string;
    /**
    * A string of the address locality.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locality CcUser#locality}
    */
    readonly locality?: string;
    /**
    * The postal code of the address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#postal_code CcUser#postal_code}
    */
    readonly postalCode?: string;
    /**
    * Whether this is the primary address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary CcUser#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * The region of the address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#region CcUser#region}
    */
    readonly region?: string;
    /**
    * The street of the address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#street_address CcUser#street_address}
    */
    readonly streetAddress?: string;
    /**
    * The type of address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type CcUser#type}
    */
    readonly type?: string;
}
export class AddressesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AddressesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._country !== undefined) {
            hasAnyValues = true;
            internalValueResult.country = this._country;
        }
        if (this._formatted !== undefined) {
            hasAnyValues = true;
            internalValueResult.formatted = this._formatted;
        }
        if (this._locality !== undefined) {
            hasAnyValues = true;
            internalValueResult.locality = this._locality;
        }
        if (this._postalCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.postalCode = this._postalCode;
        }
        if (this._primary !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._streetAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.streetAddress = this._streetAddress;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AddressesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._country = undefined;
            this._formatted = undefined;
            this._locality = undefined;
            this._postalCode = undefined;
            this._primary = undefined;
            this._region = undefined;
            this._streetAddress = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._country = value.country;
            this._formatted = value.formatted;
            this._locality = value.locality;
            this._postalCode = value.postalCode;
            this._primary = value.primary;
            this._region = value.region;
            this._streetAddress = value.streetAddress;
            this._type = value.type;
        }
    }

    // country - computed: true, optional: true, required: false
    private _country?: string; 
    public get country() {
        return this.getStringAttribute('country');
    }
    public set country(value: string) {
        this._country = value;
    }
    public resetCountry() {
        this._country = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryInput() {
        return this._country;
    }

    // formatted - computed: true, optional: true, required: false
    private _formatted?: string; 
    public get formatted() {
        return this.getStringAttribute('formatted');
    }
    public set formatted(value: string) {
        this._formatted = value;
    }
    public resetFormatted() {
        this._formatted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formattedInput() {
        return this._formatted;
    }

    // locality - computed: true, optional: true, required: false
    private _locality?: string; 
    public get locality() {
        return this.getStringAttribute('locality');
    }
    public set locality(value: string) {
        this._locality = value;
    }
    public resetLocality() {
        this._locality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localityInput() {
        return this._locality;
    }

    // postal_code - computed: true, optional: true, required: false
    private _postalCode?: string; 
    public get postalCode() {
        return this.getStringAttribute('postal_code');
    }
    public set postalCode(value: string) {
        this._postalCode = value;
    }
    public resetPostalCode() {
        this._postalCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postalCodeInput() {
        return this._postalCode;
    }

    // primary - computed: true, optional: true, required: false
    private _primary?: boolean | cdktn.IResolvable; 
    public get primary() {
        return this.getBooleanAttribute('primary');
    }
    public set primary(value: boolean | cdktn.IResolvable) {
        this._primary = value;
    }
    public resetPrimary() {
        this._primary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // street_address - computed: true, optional: true, required: false
    private _streetAddress?: string; 
    public get streetAddress() {
        return this.getStringAttribute('street_address');
    }
    public set streetAddress(value: string) {
        this._streetAddress = value;
    }
    public resetStreetAddress() {
        this._streetAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streetAddressInput() {
        return this._streetAddress;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class AddressesPropertyList extends cdktn.ComplexList {
    public internalValue? : AddressesProperty[] | cdktn.IResolvable

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
    public get(index: number): AddressesPropertyOutputReference {
        return new AddressesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EmailsProperty {
    /**
    * Whether this is the primary email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary CcUser#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * The type of email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type CcUser#type}
    */
    readonly type?: string;
    /**
    * The email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value CcUser#value}
    */
    readonly value?: string;
}
export class EmailsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EmailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._primary !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._primary = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._primary = value.primary;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // primary - computed: true, optional: true, required: false
    private _primary?: boolean | cdktn.IResolvable; 
    public get primary() {
        return this.getBooleanAttribute('primary');
    }
    public set primary(value: boolean | cdktn.IResolvable) {
        this._primary = value;
    }
    public resetPrimary() {
        this._primary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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

export class EmailsPropertyList extends cdktn.ComplexList {
    public internalValue? : EmailsProperty[] | cdktn.IResolvable

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
    public get(index: number): EmailsPropertyOutputReference {
        return new EmailsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NameProperty {
    /**
    * The family name of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#family_name CcUser#family_name}
    */
    readonly familyName?: string;
    /**
    * A string containing a formatted version of the name for display.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#formatted CcUser#formatted}
    */
    readonly formatted?: string;
    /**
    * The given name of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#given_name CcUser#given_name}
    */
    readonly givenName?: string;
    /**
    * The honorific prefix of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#honorific_prefix CcUser#honorific_prefix}
    */
    readonly honorificPrefix?: string;
    /**
    * The honorific suffix of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#honorific_suffix CcUser#honorific_suffix}
    */
    readonly honorificSuffix?: string;
    /**
    * The middle name of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#middle_name CcUser#middle_name}
    */
    readonly middleName?: string;
}
export class NamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._familyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.familyName = this._familyName;
        }
        if (this._formatted !== undefined) {
            hasAnyValues = true;
            internalValueResult.formatted = this._formatted;
        }
        if (this._givenName !== undefined) {
            hasAnyValues = true;
            internalValueResult.givenName = this._givenName;
        }
        if (this._honorificPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.honorificPrefix = this._honorificPrefix;
        }
        if (this._honorificSuffix !== undefined) {
            hasAnyValues = true;
            internalValueResult.honorificSuffix = this._honorificSuffix;
        }
        if (this._middleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.middleName = this._middleName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._familyName = undefined;
            this._formatted = undefined;
            this._givenName = undefined;
            this._honorificPrefix = undefined;
            this._honorificSuffix = undefined;
            this._middleName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._familyName = value.familyName;
            this._formatted = value.formatted;
            this._givenName = value.givenName;
            this._honorificPrefix = value.honorificPrefix;
            this._honorificSuffix = value.honorificSuffix;
            this._middleName = value.middleName;
        }
    }

    // family_name - computed: true, optional: true, required: false
    private _familyName?: string; 
    public get familyName() {
        return this.getStringAttribute('family_name');
    }
    public set familyName(value: string) {
        this._familyName = value;
    }
    public resetFamilyName() {
        this._familyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get familyNameInput() {
        return this._familyName;
    }

    // formatted - computed: true, optional: true, required: false
    private _formatted?: string; 
    public get formatted() {
        return this.getStringAttribute('formatted');
    }
    public set formatted(value: string) {
        this._formatted = value;
    }
    public resetFormatted() {
        this._formatted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formattedInput() {
        return this._formatted;
    }

    // given_name - computed: true, optional: true, required: false
    private _givenName?: string; 
    public get givenName() {
        return this.getStringAttribute('given_name');
    }
    public set givenName(value: string) {
        this._givenName = value;
    }
    public resetGivenName() {
        this._givenName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get givenNameInput() {
        return this._givenName;
    }

    // honorific_prefix - computed: true, optional: true, required: false
    private _honorificPrefix?: string; 
    public get honorificPrefix() {
        return this.getStringAttribute('honorific_prefix');
    }
    public set honorificPrefix(value: string) {
        this._honorificPrefix = value;
    }
    public resetHonorificPrefix() {
        this._honorificPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get honorificPrefixInput() {
        return this._honorificPrefix;
    }

    // honorific_suffix - computed: true, optional: true, required: false
    private _honorificSuffix?: string; 
    public get honorificSuffix() {
        return this.getStringAttribute('honorific_suffix');
    }
    public set honorificSuffix(value: string) {
        this._honorificSuffix = value;
    }
    public resetHonorificSuffix() {
        this._honorificSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get honorificSuffixInput() {
        return this._honorificSuffix;
    }

    // middle_name - computed: true, optional: true, required: false
    private _middleName?: string; 
    public get middleName() {
        return this.getStringAttribute('middle_name');
    }
    public set middleName(value: string) {
        this._middleName = value;
    }
    public resetMiddleName() {
        this._middleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get middleNameInput() {
        return this._middleName;
    }
}
export interface PhoneNumbersProperty {
    /**
    * Whether this is the primary phone number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary CcUser#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * The type of phone number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type CcUser#type}
    */
    readonly type?: string;
    /**
    * The phone number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value CcUser#value}
    */
    readonly value?: string;
}
export class PhoneNumbersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PhoneNumbersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._primary !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PhoneNumbersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._primary = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._primary = value.primary;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // primary - computed: true, optional: true, required: false
    private _primary?: boolean | cdktn.IResolvable; 
    public get primary() {
        return this.getBooleanAttribute('primary');
    }
    public set primary(value: boolean | cdktn.IResolvable) {
        this._primary = value;
    }
    public resetPrimary() {
        this._primary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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

export class PhoneNumbersPropertyList extends cdktn.ComplexList {
    public internalValue? : PhoneNumbersProperty[] | cdktn.IResolvable

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
    public get(index: number): PhoneNumbersPropertyOutputReference {
        return new PhoneNumbersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PhotosProperty {
    /**
    * A display name for the photo.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display CcUser#display}
    */
    readonly display?: string;
    /**
    * Whether this is the primary photo.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary CcUser#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * The type of photo.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type CcUser#type}
    */
    readonly type?: string;
    /**
    * The photo data or URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value CcUser#value}
    */
    readonly value?: string;
}
export class PhotosPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PhotosProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._display !== undefined) {
            hasAnyValues = true;
            internalValueResult.display = this._display;
        }
        if (this._primary !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PhotosProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._display = undefined;
            this._primary = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._display = value.display;
            this._primary = value.primary;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // display - computed: true, optional: true, required: false
    private _display?: string; 
    public get display() {
        return this.getStringAttribute('display');
    }
    public set display(value: string) {
        this._display = value;
    }
    public resetDisplay() {
        this._display = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayInput() {
        return this._display;
    }

    // primary - computed: true, optional: true, required: false
    private _primary?: boolean | cdktn.IResolvable; 
    public get primary() {
        return this.getBooleanAttribute('primary');
    }
    public set primary(value: boolean | cdktn.IResolvable) {
        this._primary = value;
    }
    public resetPrimary() {
        this._primary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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

export class PhotosPropertyList extends cdktn.ComplexList {
    public internalValue? : PhotosProperty[] | cdktn.IResolvable

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
    public get(index: number): PhotosPropertyOutputReference {
        return new PhotosPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RolesProperty {
    /**
    * Whether this is the primary role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary CcUser#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * The type of role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type CcUser#type}
    */
    readonly type?: string;
    /**
    * The role name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value CcUser#value}
    */
    readonly value?: string;
}
export class RolesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RolesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._primary !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RolesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._primary = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._primary = value.primary;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // primary - computed: true, optional: true, required: false
    private _primary?: boolean | cdktn.IResolvable; 
    public get primary() {
        return this.getBooleanAttribute('primary');
    }
    public set primary(value: boolean | cdktn.IResolvable) {
        this._primary = value;
    }
    public resetPrimary() {
        this._primary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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

export class RolesPropertyList extends cdktn.ComplexList {
    public internalValue? : RolesProperty[] | cdktn.IResolvable

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
    public get(index: number): RolesPropertyOutputReference {
        return new RolesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
